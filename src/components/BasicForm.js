import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: enteredFirstNameHasError,
    valueChangeHandler: enteredFirstNameChangeHandler,
    inputBlurHandler: enteredFirstNameBlurHandler,
    reset: resetenteredFirstName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: enteredLastNameHasError,
    valueChangeHandler: enteredLastNameChangeHandler,
    inputBlurHandler: enteredLastNameBlurHandler,
    reset: resetenteredLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: enteredEmailChangeHandler,
    inputBlurHandler: enteredEmailBlurHandler,
    reset: resetenteredEmail,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredFirstName, enteredLastName, enteredEmail);

    resetenteredFirstName();
    resetenteredLastName();
    resetenteredEmail();
  };

  const firstNameClasses = enteredFirstNameHasError
    ? "form-control"
    : "form-control Invalid";

  const lastNameClasses = enteredLastNameHasError
    ? "form-control"
    : "form-control Invalid";

  const emailClasses = enteredEmailHasError
    ? "form-control"
    : "form-control Invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={enteredFirstNameChangeHandler}
            onBlur={enteredFirstNameBlurHandler}
            value={enteredFirstName}
          />
          {enteredFirstNameHasError && (
            <p className="error-text">First Name cannot be Empty</p>
          )}
        </div>

        <div className={lastNameClasses}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={enteredLastNameChangeHandler}
            onBlur={enteredLastNameBlurHandler}
            value={enteredLastName}
          />
          {enteredLastNameHasError && (
            <p className="error-text">Last Name cannot be Empty</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={enteredEmailChangeHandler}
          onBlur={enteredEmailBlurHandler}
        />
        {enteredEmailHasError && (
          <p className="error-text">E-Mail cannot be Empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
