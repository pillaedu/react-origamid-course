import React from "react";

const types = {
  email: {
    regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: "Preencha um email válido",
  },
};

function useForm(type) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type == false) return true;

    if (value.lenght === 0) {
      setError("Preencha um valor");
      return false;
    }

    if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    }

    setError(null);
    return true;
  }

  function onChange({ target }) {
    if (error) {
      validate(target.value);
    }
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}

export default useForm;
