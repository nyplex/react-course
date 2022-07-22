import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Form from "./components/Form/Form";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal";
import CartProvider from "./store/CartProvider";

function App(props) {
    const [cartIsShown, setCartIsShown] = useState(false);
    const [formIsShown, setFormIsShown] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };
    const hideFormHandler = () => {
        setFormIsShown(false);
    };
    const showFormHandler = () => {
        setCartIsShown(false);
        setFormIsShown(true);
    };

    const cancelFormHandler = () => {
        setFormIsShown(false);
        setCartIsShown(true);
    };

    const onConfirmHandler = async (userData, meals) => {
        setIsSubmitting(true);
        await fetch(
            "https://react-http-1f93b-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
            {
                method: "POST",
                body: JSON.stringify({
                    user: userData,
                    orderedItems: meals.items,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        setIsSubmitting(false);
        setIsSubmitted(true);
        hideFormHandler();
        meals.clearCart()
    };

    return (
        <Fragment>
            <CartProvider>
                {cartIsShown && (
                    <Cart
                        showForm={showFormHandler}
                        onClose={hideCartHandler}
                    />
                )}
                {formIsShown && (
                    <Form
                        onConfirm={onConfirmHandler}
                        onCancel={cancelFormHandler}
                        onClose={hideFormHandler}
                    />
                )}
                <Header onShowCart={showCartHandler} />
                <main>
                    <Meals />
                </main>
            </CartProvider>
            {isSubmitted && (
                <Modal onClose={() => setIsSubmitted(false)}>
                    <h1>Thank you for your order!</h1>
                </Modal>
            )}
        </Fragment>
    );
}

export default App;
