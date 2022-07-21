import useInput from "../hooks/useInput";

const BasicForm = (props) => {
    const {
        value: fnameValue,
        changeValueHandler: fnameChangeHandler,
        onBlurHandler: fnameBlurHandler,
        reset: fnameReset,
        isValid: fnameIsValid,
        hasError: fnameHasError,
    } = useInput((value) => value.trim().length > 0);
    const {
        value: lnameValue,
        changeValueHandler: lnameChangeHandler,
        onBlurHandler: lnameBlurHandler,
        reset: lnameReset,
        isValid: lnameIsValid,
        hasError: lnameHasError,
    } = useInput((value) => value.trim().length > 0);
    const {
        value: emailValue,
        changeValueHandler: emailChangeHandler,
        onBlurHandler: emailBlurHandler,
        reset: emailReset,
        isValid: emailIsValid,
        hasError: emailHasError,
    } = useInput((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));

    let formIsValid = false;
    if (fnameIsValid && lnameIsValid && emailIsValid) {
        formIsValid = true;
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        if(!formIsValid) {
            return;
        }
        console.log(`Form submitted with ${fnameValue}`);
        fnameReset();
        lnameReset();
        emailReset();
    };

    const fnameInputClasses = fnameHasError
        ? "form-control invalid"
        : "form-control";
    const lnameInputClasses = lnameHasError
        ? "form-control invalid"
        : "form-control";
    const emailInputClasses = emailHasError
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="control-group">
                <div className={fnameInputClasses}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={fnameChangeHandler}
                        onBlur={fnameBlurHandler}
                        value={fnameValue}
                    />
                    {fnameHasError && <p>Must enter a valid first name</p>}
                </div>
                <div className={lnameInputClasses}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={lnameChangeHandler}
                        onBlur={lnameBlurHandler}
                        value={lnameValue}
                    />
                    {lnameHasError && <p>Must enter a valid last name</p>}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="name">E-Mail Address</label>
                <input
                    type="email"
                    id="name"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={emailValue}
                />
                {emailHasError && <p>Must enter a valid email</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
