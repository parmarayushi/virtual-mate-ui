import { Details } from "./components/Details";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen">
      <div className=" h-full overflow-y-auto bg-white">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col bg-gray-100">
        <div className="p-5">
          <Header />
        </div>
        <div className="flex-1 overflow-y-auto p-5 pt-0">
          <Details />
        </div>
      </div>
    </div>
  );
}

export default App;
