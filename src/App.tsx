import Label from "./components/ui/Label/Label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./components/ui/Tabs/Tabs";

function App() {
  return (
    <div className="h-[calc(100vh-250px)] bg-yellow-500 flex-col justify-between w-full">
      <Tabs defaultValue="tab2">
        <TabsList className="bg-black text-white " position="center">
          <TabsTrigger
            variant="tertiary"
            // customTitleClassName=""
            size="large"
            value="tab1"
          >
            <Label className="text-white">Tab 1</Label>
          </TabsTrigger>
          <TabsTrigger
            variant="tertiary"
            size="large"
            value="tab2"
            customTitleClassName=""
          >
            <Label>Tab 2</Label>
          </TabsTrigger>
          <TabsTrigger
            variant="tertiary"
            size="large"
            value="tab3"
            // className="bg-green-300"
            customTitleClassName=""
          >
            <Label>Tab 2</Label>
          </TabsTrigger>
          <TabsTrigger
            variant="tertiary"
            size="large"
            value="tab4"
            // className="bg-green-300"
            customTitleClassName=""
          >
            <Label>Tab 2</Label>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
