namespace TemplateApp.API.Security.Configuration;

public class JwtConfiguration
{
    public string Issuer { get; set; } = null!;

    public string Audience { get; set; } = null!;

    public string Secret { get; set; } = null!;

    public int Expiration { get; set; }
}