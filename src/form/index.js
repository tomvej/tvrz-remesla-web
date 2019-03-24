import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm} from 'redux-form';
import {Form as BootstrapForm, Row, Col, Alert} from 'reactstrap';
import {TextInput} from 'components';
import {Field, StringInput} from 'containers';
import {required, validEmail} from 'utils';
import {REGISTRATION_FORM} from '../constants';
import {submit} from '../actions';
import Schedule from './Schedule';
import SubmitContainer from './SubmitContainer';
import Sum from './Sum';

const Form = ({handleSubmit, error}) => (
    <BootstrapForm className="w-100" onSubmit={handleSubmit}>
        <Row>
            <Col md={6}>
                <Field
                    name="name"
                    label="Jméno a příjmení"
                    placeholder="Tvoje jméno"
                    component={StringInput}
                    validate={[required]}
                    id="entry.2146001187"
                />
            </Col>
            <Col md={6}>
                <Field
                    name="email"
                    label="E-mail"
                    placeholder="Tvůj e-mail"
                    component={StringInput}
                    validate={[required, validEmail]}
                    id="entry.1672151647"
                />
            </Col>
        </Row>
        <Schedule />
        {error && <Alert color="danger">{error}</Alert>}
        <div className="d-flex justify-content-center">
            <Sum />
        </div>
        <Field
            component={TextInput}
            name="message"
            placeholder="Chceš nám něco vzkázat?"
            id="entry.1667341310"
        />
        <div className="d-flex justify-content-center">
            <SubmitContainer />
        </div>
    </BootstrapForm>
);

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
};

Form.defaultProps = {
    error: null,
};

export default reduxForm({
    form: REGISTRATION_FORM,
    onSubmit: (values, dispatch) => dispatch(submit(values)),
})(Form);
