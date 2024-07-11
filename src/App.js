import {AllRoutes} from "./routes/AllRoutes";
import {Header,Footer} from "./components";
import './App.css';

function App() {
  return (
    <div className="App bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
