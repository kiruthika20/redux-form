import React from 'react'
import { Field, reduxForm, formValueSelector, change } from 'redux-form'
import Input from './input'
import {connect } from 'react-redux'
import validators from './validators';

const onSubmit = (values) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 3000)
  });
}


const formValidators = {
  firstName: validators.required('firsname is not found'),
  lastName: [validators.required('last name needed'), validators.maxLength(5)]
}

var SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  const updateLastName=(firstName)=>{
    props.change('lastName',firstName)
  }
  const setInitialValues=()=>{
    props.initialize({firstName:'krithika',lastName:'D'})

  }
  return (
    <div >
      <div>
      {props._firstName}
      <br/>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component={Input}
            validate={formValidators.firstName}
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component={Input}
            allowPattern="^[a-zA-Z]*$"
            validate={formValidators.lastName}
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component={Input}
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="male"
            />{' '}
            Male
          </label>
          <label>
            <Field
              name="sex"
              component="Input"
              type="radio"
              value="female"
            />{' '}
            Female
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <button onClick={()=>updateLastName(props._firstName)}>update</button>
      <button onClick={()=>props.updatemail()}>update email</button>
      <button onClick={()=>setInitialValues()}>setInitialValues from FORM</button>
     
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component={Input}
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" onClick={handleSubmit(onSubmit)} disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </div>
  )
}



SimpleForm =  reduxForm({
  form: 'simple',
})(SimpleForm);

const selector = formValueSelector('simple');

const mapStateToProps = (state) => {
  return {
    _firstName: selector(state, 'firstName')
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatemail:()=>{
     dispatch( change('simple','email','azxdr@gmail.com'))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleForm);
