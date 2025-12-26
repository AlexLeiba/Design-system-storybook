import { useState } from "react";
import Pagination from "./components/ui/Pagination/Pagination";

function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="h-[calc(100vh-250px)] bg-yellow-500 flex-col justify-between w-full">
      {/* <DateTimePicker /> */}
      <Pagination
        onChangePage={(p) => setPage(p)}
        nrOfPages={1000}
        currentPage={page}
      />
    </div>
  );
}

export default App;
