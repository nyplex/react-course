import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const disptach = useDispatch();
    const counter = useSelector((state) => state.counter);

    const incrementHandler = () => {
        disptach({ type: "INCREMENT" });
    };

	const increaseHandler = () => {
		disptach({ type: "INCREASE", amount: 5 });
	}

    const decrementHandler = () => {
        disptach({ type: "DECREMENT" });
    };

    const toggleCounterHandler = () => {};

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>-- {counter} --</div>
            <div>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increment by 5</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

// class Counter extends Component {

// 	incrementHandler() {
// 		this.props.increment();
// 	}

// 	toggleCounterHandler() {}

// 	decrementHandler() {
// 		this.props.decrement();
// 	}

//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>-- {this.props.counter} --</div>
//                 <div>
//                     <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//                     <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler}>
//                     Toggle Counter
//                 </button>
//             </main>
//         );
//     }
// }

// const mapStateToProps = (state) => {
// 	return {
// 		counter: state.counter,
// 	};
// }

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		increment: () => dispatch({ type: "INCREMENT" }),
// 		decrement: () => dispatch({ type: "DECREMENT" }),
// 		toggleCounter: () => dispatch({ type: "TOGGLE_COUNTER" }),
// 	};
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
