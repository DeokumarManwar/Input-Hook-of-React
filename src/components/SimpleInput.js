// import { useState, useEffect } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));
  // const nameInputRef = useRef();
  // const [enteredNameIsValid, setenteredNameIsValid] = useState(false);

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);

  //   // if (event.target.value.trim() !== "") {
  //   //   setenteredNameIsValid(true);
  //   //   return;
  //   // }
  // };

  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouched(true);

  //   // if (enteredName.trim() === "") {
  //   //   setenteredNameIsValid(false);
  //   //   return;
  //   // }
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    if (!enteredEmailIsValid) {
      return;
    }

    // if (enteredName.trim() === "") {
    //   setenteredNameIsValid(false);
    //   return;
    // }
    // setenteredNameIsValid(true);

    console.log(enteredName);
    console.log(enteredEmail);

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // nameInputRef.current.value = ""; // Not the Ideal condition to do we should not manupulate the DOM
    // setEnteredName("");
    // setEnteredNameTouched(false);
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputHasError && <p className="error-text">Name must no be Empty</p>}
      <div className={emailInputClasses}>
        <label htmlFor="name">Your E-Mail</label>
        <input
          // ref={nameInputRef}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
      </div>
      {emailInputHasError && (
        <p className="error-text">Email must no be Empty</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
