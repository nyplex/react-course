import { useContext, useRef, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Form.module.css";

const isEmpty = (value) => value.trim().length === 0;
const isNotFiveChar = (value) => value.trim().length !== 5;

const Form = (props) => {
    const cartCtx = useContext(CartContext);
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true,
    });
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const cityInputRef = useRef();
    const postalCodeInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = !isNotFiveChar(enteredPostalCode);

        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid,
        });

        const formIsValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredCityIsValid &&
            enteredPostalCodeIsValid;

        if (!formIsValid) {
            return;
        }
        console.log(cartCtx.items);
        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostalCode,
        }, cartCtx);
    };
    const nameClasses = `${classes.control} ${
        formInputValidity.name ? "" : classes.invalid
    }`;
    const streetClasses = `${classes.control} ${
        formInputValidity.street ? "" : classes.invalid
    }`;
    const cityClasses = `${classes.control} ${
        formInputValidity.city ? "" : classes.invalid
    }`;
    const postalCodeClasses = `${classes.control} ${
        formInputValidity.postalCode ? "" : classes.invalid
    }`;
    return (
        <Modal onClose={props.onClose}>
            <h1>We need some details</h1>
            <form onSubmit={confirmHandler} className={classes.form}>
                <div className={nameClasses}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" ref={nameInputRef} />
                    {!formInputValidity.name && <p>Please enter your name</p>}
                </div>
                <div className={streetClasses}>
                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" ref={streetInputRef} />
                    {!formInputValidity.street && (
                        <p>Please enter your street</p>
                    )}
                </div>
                <div className={cityClasses}>
                    <label htmlFor="postal">Postal Code</label>
                    <input type="text" id="postal" ref={postalCodeInputRef} />
                    {!formInputValidity.postalCode && (
                        <p>Please enter a valid postal code</p>
                    )}
                </div>
                <div className={postalCodeClasses}>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" ref={cityInputRef} />
                    {!formInputValidity.city && <p>Please enter your city</p>}
                </div>
                <div className={classes.actions}>
                    <button type="button" onClick={props.onCancel}>
                        CANCEL
                    </button>
                    <button type="submit" className={classes.submit}>
                        Confirm
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default Form;
