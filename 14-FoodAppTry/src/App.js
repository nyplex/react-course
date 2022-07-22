import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Form from "./components/Form/Form";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const [formIsShown, setFormIsShown] = useState(false);

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

    const onConfirmHandler = (userData, meals) => {
        console.log(userData, meals);
        fetch(
            "https://react-http-1f93b-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
            {
                method: "POST",
                body: JSON.stringify({
                    user: userData,
                    orderedItems: meals,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    };

    return (
        <CartProvider>
            {cartIsShown && (
                <Cart showForm={showFormHandler} onClose={hideCartHandler} />
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
    );
}

export default App;
