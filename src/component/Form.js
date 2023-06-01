import React from "react";



const Form = (props) => {
  
  function updateinput(event) {
    props.setInputValue(event.target.value)
  }

  return (
    <div className="form">
      <input
        value={props.inputValue}
        onChange={updateinput}
        className="input"
        placeholder={"Type here..."}
      />
      <button onClick={props.handleSubmit} className="submit">
        +
      </button>
    </div>
  );
};

export default Form;
