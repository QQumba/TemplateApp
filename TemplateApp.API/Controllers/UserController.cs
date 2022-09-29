using Microsoft.AspNetCore.Mvc;

namespace TemplateApp.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly FakeFailureService _failureService;

    public UserController(FakeFailureService failureService)
    {
        _failureService = failureService;
    }

    [HttpGet]
    public ActionResult<string> GetUserInfo()
    {
        if (_failureService.ShouldFail)
        {
            return BadRequest("error occured");
        }

        return Ok("ok");
    }
}