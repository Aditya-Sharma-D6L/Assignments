import { Provider } from "react-redux";
import Films from "./components/Films";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Films />
      </div>
    </Provider>
  );
}

export default App;
