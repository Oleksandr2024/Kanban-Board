import { ChangeEvent, ReactNode, useReducer, useState } from "react";

const initialState = { count: 0, text: "", showEmoji: false };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_TEXT,
  TOGGLE_SHOW,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string; //if it wasn't optional, we could have problems with "+" and "-"
};

const reducer = (
  state: typeof initialState,
  action: ReducerAction
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_TEXT:
      return { ...state, text: action.payload ?? "" }; //solves the issue "null coalesking  operator"   => if (action.payload === null || undefined), return rigth side ("")
    case REDUCER_ACTION_TYPE.TOGGLE_SHOW:
      return { ...state, showEmoji: !state.showEmoji };
    default:
      throw new Error();
  }
};

type CounterProps = {
  children: (num: number) => ReactNode;
};

const CounterWithReducer = ({ children }: CounterProps) => {
  //   const [count, setCount] = useState<number>(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  const handleNewInput = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: REDUCER_ACTION_TYPE.NEW_TEXT, payload: e.target.value });
  const handeleShow = () => dispatch({ type: REDUCER_ACTION_TYPE.TOGGLE_SHOW });

  return (
    <div>
      <h2>{children(state.count)}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type="textInput" onChange={handleNewInput}></input>
      <h2>{state.text}</h2>
      <button onClick={handeleShow}>{state.showEmoji ? "Hide" : "Show"}</button>
      {state.showEmoji && <span>🍔</span>}
    </div>
  );
};

export default CounterWithReducer;
