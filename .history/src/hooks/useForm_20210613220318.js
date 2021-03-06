import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [fromValues, setFormValues] = useState(initialState);

  const reset = (newFormState = initialState) => {
    setFormValues(newFormState);
  };

  const handleInputChange = ({ target }) => {
    // e.preventDefault();
    setFormValues({
      ...fromValues,
      [target.name]: target.value,
    });
  };

  return [fromValues, handleInputChange, reset];
};
