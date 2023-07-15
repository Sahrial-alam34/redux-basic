import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../services/actions/counterActions";



const Counter = () => {
   
    const count = useSelector((state) => state.count)
   // console.log(count)
   const dispatch = useDispatch();
    const handleIncrement = ()=>{
        dispatch(incrementCounter())
    }
    const handleReset= ()=>{
        dispatch(resetCounter())
    }
    const handleDecrement = ()=>{
        dispatch(decrementCounter())
    }
    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;

//state - count : 0
//action - increment, decrement, reset
//reducer - increment => count +1 
//reducer - decrement => count - 1  
//reducer - reset => count = 0
//store

//provider, useSelector, dispatch