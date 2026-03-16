import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeCOntainer from "./components/HooksCakeCOntainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeCOntainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
