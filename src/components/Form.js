import React from 'react';
import {
    Button, Form, FormControl, Navbar, Table


} from 'react-bootstrap';
import {NavLink} from "react-router-dom";

export default (props) => {
    const {
        cancel,
        errors,
        submit,
        submitButtonText,
        elements,
    } = props;

    function handleSubmit(event) {
        event.preventDefault();
        submit();
    }

    function handleCancel(event) {
        event.preventDefault();
        cancel();
    }

    return (
        <div className="forform">
            {/*<ErrorsDisplay errors={errors} />*/}
            {/*//gives itself props*/}
            <Form onSubmit={handleSubmit}>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                {elements()}

                    <Button className="button" type="submit">{submitButtonText}</Button>



            </Form>
        </div>
    );
}

function ErrorsDisplay({ errors }) {
    let errorsDisplay = null;
    console.log(errors)

    if (errors.length) {
        errorsDisplay = (
            <div>
                <h2 className="validation--errors--label">Validation errors</h2>
                <div className="validation-errors">
                    <ul>
                        {errors.map((error, i) => <li key={i}>{error}</li>)}
                    </ul>
                </div>
            </div>
        );
    }

    return errorsDisplay;
}
