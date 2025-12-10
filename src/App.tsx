import { Button } from "./components/ui/Button/Button";
import { Checkbox } from "./components/ui/Checkbox/Checkbox";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "./components/ui/Dialog/Dialog";
import { FileUpload } from "./components/ui/FileUpload/FileUpload";
import { Input } from "./components/ui/Input/Input";

function App() {
  return (
    <div className="h-[calc(100vh-250px)] bg-yellow-50 flex-col justify-between">
      {/* <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger
              variant="tertiary"
              // customTitleClassName=""
              size="large"
              value="tab1"
            >
              <Label>Tab 1</Label>
            </TabsTrigger>
            <TabsTrigger
              variant="primary"
              size="large"
              value="tab2"
              className="bg-green-300"
            >
              {" "}
              <Label>Tab 2</Label>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs> */}
      <Input
        title={"Input title"}
        error="dsdsdssdsd"
        errorClassName="text-2xl"
        titleClassName="text-2xl"
      />
      <Input
        title={"Input title"}
        success
        className="text-3xl font-bold border-4"
      />

      <Input title={"Input title"} sizeType={"large"} />
      <Input
        type="password"
        title={"Input title"}
        sizeType={"small"}
        eyeClassName="text-red-600"
      />
    </div>
  );
}

export default App;
