import { Header } from "./components/Header";
import { SideMenu } from "./components/SideMenu";
import { AppRouter } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="bg-background-light h-screen p-[40px] max-lg:p-0 max-lg:bg-white">
      <Header />
      <div className="flex gap-[40px] justify-between h-auto mb-[40px]">
        <div className="bg-white rounded-[10px] py-[20px] px-[40px] flex-auto w-[1200px]">
          <AppRouter />
        </div>
        <SideMenu />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
