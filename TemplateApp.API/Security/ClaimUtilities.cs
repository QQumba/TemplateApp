using System.Security.Claims;

namespace TemplateApp.API.Security;

public static class ClaimUtilities
{
    public const string Email = "email";
    public const string UserId = "user_id";
    public const string FirstName = "first_name";
    public const string LastName = "last_name";

    public static long GetUserId(this ClaimsPrincipal principal)
    {
        return long.Parse(principal.FindFirst(UserId)?.Value ?? "-1");
    }

    public static string GetEmail(this ClaimsPrincipal principal)
    {
        return principal.FindFirst(Email)!.Value;
    }
}