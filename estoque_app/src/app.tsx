import { Routes } from "./router";
import {ToastContainer, Bounce} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App: React.FC = () => {
    return (
    <div className="app">
      <Routes />
      <ToastContainer 
        limit={3}
        transition={Bounce}
        theme="colored"
        pauseOnFocusLoss={false}
        autoClose={2500}
      />
    </div>
  );
};

export default App;
