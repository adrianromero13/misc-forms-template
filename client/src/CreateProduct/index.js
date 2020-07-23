import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button, Container } from 'semantic-ui-react';
import { email, length, required } from 'redux-form-validators';


class CreateProduct extends Component {

  renderInput = ({
    input,
    meta,
    label,
    icon,
    iconPosition,
    maxLength,
  }) => {
    return (
      <>
        <Form.Input
          {...input}
          label={label}
          icon={icon}
          iconPosition={iconPosition}
          error={meta.touched && meta.error}
          type='input'
          placeholder={label}
          autoComplete='off'
          maxLength={maxLength}
        />
      </>
    )
  }

  render() {
    console.log('inside of createProduct render', this.props);
    const { handleSubmit, invalid, submitting, submitFailed } = this.props;
    return (
      <Container>

        <Form
          size='small'
          // add onsubmit
        >
          <Segment stacked>
            <h2>Create a Product</h2>
            <Field
              name='name'
              component={this.renderInput}
            />
            <Field
              name='category'
              label='Category'
              component={this.renderInput}
            />
            <Field
              name='strain'
              label='Strain'
              component={this.renderInput}
            />
            <Field
              name='method'
              label='Method'
              component={this.renderInput}
            />
            <Field
              name='quantity'
              label='Quantity'
              component={this.renderInput}
            />
            <Field
              name='price'
              label='Price'
              component={this.renderInput}
            />
            <Field
              name='image'
              label='Image'
              component={this.renderInput}
            />
            <Button
              content='Create Product'
              color='teal'
              fluid
              size='large'
              type='submit'
              disabled={invalid || submitting || submitFailed}
            />
          </Segment>
        </Form>
      </Container>
    );
  }
}



export default reduxForm({
  form: 'createProduct',
  // asyncValidate,
})(CreateProduct);
