import { Button } from "../Button/Button";
import { useToast } from "./useToast";

export function TestToast() {
  const { handler } = useToast(1000);
  return (
    <div>
      <Button onClick={() => handler("Error toast message", "error")}>
        Trigger error toast
      </Button>
      <Button onClick={() => handler("Info toast message", "info")}>
        Trigger info toast
      </Button>
      <Button onClick={() => handler("Warning toast message", "warning")}>
        Trigger warning toast
      </Button>
      <Button onClick={() => handler("Success toast message", "success")}>
        Trigger success toast
      </Button>
    </div>
  );
}
