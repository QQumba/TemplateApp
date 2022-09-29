using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc.Controllers;
using Serilog;
using TemplateApp.API;
using TemplateApp.API.Security;
using TemplateApp.API.Security.Configuration;
using TemplateApp.API.Security.Swagger;

var builder = WebApplication.CreateBuilder(args);

ConfigureLogging(builder, builder.Configuration);
ConfigureServices(builder.Services, builder.Configuration);

var webApp = builder.Build();

ConfigureMiddleware(webApp, webApp.Environment);
ConfigureEndpoints(webApp);

webApp.Run();

void ConfigureLogging(WebApplicationBuilder app, IConfiguration configuration)
{
    var logger = new LoggerConfiguration()
        .ReadFrom.Configuration(configuration)
        .Enrich.FromLogContext()
        .CreateLogger();

    app.Host.UseSerilog(logger);
}

void ConfigureServices(IServiceCollection services, IConfiguration configuration)
{
    services.AddOptions<JwtConfiguration>().Bind(configuration.GetSection("Jwt"));

    services.AddEndpointsApiExplorer();

    services.AddJwtAuthentication(configuration);

    services.AddSwaggerGen(o =>
    {
        o.EnableAnnotations();
        o.TagActionsBy(api =>
        {
            if (api.GroupName != null)
            {
                return new[] { api.GroupName };
            }

            if (api.ActionDescriptor is ControllerActionDescriptor controllerActionDescriptor)
            {
                return new[] { controllerActionDescriptor.ControllerName };
            }

            throw new InvalidOperationException("Unable to determine tag for endpoint.");
        });

        o.OperationFilter<AuthorizeCheckOperationFilter>();
        o.DocInclusionPredicate((name, api) => true);
    });

    services.AddAuthorization();

    services.AddControllers()
        .AddJsonOptions(o =>
        {
            var enumConverter = new JsonStringEnumConverter();
            o.JsonSerializerOptions.Converters.Add(enumConverter);
        });

    services.AddSingleton<FakeFailureService>();
}

void ConfigureMiddleware(IApplicationBuilder app, IHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    // todo: move to config
    app.UseCors(b =>
        b.WithOrigins("http://localhost:8080", "http://localhost:4200").AllowAnyHeader().AllowAnyMethod());
    // app.UseHttpsRedirection();
    app.UseRouting();

    app.UseAuthentication();
    app.UseAuthorization();
}

void ConfigureEndpoints(IEndpointRouteBuilder app)
{
    app.MapControllers();
}