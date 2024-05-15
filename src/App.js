import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";
import rootReducer from "./reducers";
import { SELL_MEAT, SELL_VEGETABLE } from "./reducers/actionTypes";

function App() {
  // 通常のuseReducerを使う
  const initialState = {
    reducerMeat: { numOfMeat: 30 },
    reducerVegetable: { numOfVegetable: 25 },
  };
  //　まとめられたrootReducerから取り出す
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => dispatch({ type: SELL_MEAT })}>Sell meat</button>
        today's meat:{state.reducerMeat.numOfMeat}
        <button onClick={() => dispatch({ type: SELL_VEGETABLE })}>
          Sell vegetable
        </button>
        today's vegetable:{state.reducerVegetable.numOfVegetable}
      </header>
    </div>
  );
}

export default App;
