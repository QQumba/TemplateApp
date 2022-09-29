namespace TemplateApp.API;

public class FakeFailureService
{
    private readonly int MaxFailure = 0;

    private int _failureCounter = -1;

    public bool ShouldFail => CheckFailure();

    private bool CheckFailure()
    {
        _failureCounter++;
        if (_failureCounter != MaxFailure)
        {
            return true;
        }

        _failureCounter = -1;
        return false;
    }
}