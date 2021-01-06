import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [formFields, setFormFields] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: ''
  });

  

  const onInputChange = (event) => {
    const newFormFields = {
      ...formFields
    }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const onFormSubmit = (event) => {
    console.log(props.sendSubmission.name)
    event.preventDefault();
    props.sendSubmission(formFields);

    setFormFields({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: ''
    });
  };

  const formsFormat = (fields) => {
    let newFields = [];

    for(const field of fields)
    if (field.key){
      newFields.push(<input 
        key = {field.key}
        name = {field.key}
        placeholder={field.placeholder}
        value = {formFields[field.key]}
        type="text"
        onChange={onInputChange}
        className={formFields[field.key] ? '' : 'PlayerSubmissionFormt__input'}
        />)
    }
    else {
      newFields.push(field)
    }
    return newFields;
  }



  return (
    <div className="PlayerSubmissionForm" onSubmit={onFormSubmit}>
      <h3>Player Submission Form for Player #{props.index}</h3>

      <form className="PlayerSubmissionForm__form" >
        <div className="PlayerSubmissionForm__poem-inputs">
        {formsFormat(props.fields)}
        </div>
        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
