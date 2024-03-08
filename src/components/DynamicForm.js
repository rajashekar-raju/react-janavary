import React, { useState } from 'react';

const DynamicForm = () => {
  const [formFields, setFormFields] = useState([
    { id: 1, name: '', age: '' } // Initial field
  ]);

  const addField = () => {
    setFormFields((prevFields) => [
      ...prevFields,
      { id: Date.now(), name: '', age: '' }
    ]);
  };

  const removeField = (fieldId) => {
    setFormFields((prevFields) =>
      prevFields.filter((field) => field.id !== fieldId)
    );
  };

  const handleInputChange = (fieldId, fieldName, value) => {
    setFormFields((prevFields) =>
      prevFields.map((field) =>
        field.id === fieldId ? { ...field, [fieldName]: value } : field
      )
    );
  };

  const handleSubmit = () => {
    console.log('Form data submitted:', formFields);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        {formFields.map((field) => (
          <div key={field.id} className="flex space-x-2 my-2">
            <input
              type="text"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleInputChange(field.id, 'name', e.target.value)}
            />
            <input
              type="text"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleInputChange(field.id, 'age', e.target.value)}
            />
            <button type="button" onClick={() => removeField(field.id)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addField}>
          Add Field
        </button>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
