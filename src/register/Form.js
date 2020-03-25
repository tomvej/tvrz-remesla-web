import * as R from "ramda"
import React from "react"
import PropTypes from "prop-types"
import { reduxForm } from "redux-form"
import { connect } from "react-redux"
import { graphql, useStaticQuery } from "gatsby"

import { Center, ErrorAlert, StringInput, TextInput } from "./components"
import { Field, SubmitContainer } from "./containers"
import { required, validEmail } from "./utils"
import { getIntervals } from "./selectors"
import { REGISTRATION_FORM } from "./constants"
import { submit } from "./actions"

import bootstrap from "../bootstrap.module.scss"

const Form = ({handleSubmit, error}) => {
    const {site: {siteMetadata: {fields}}} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    fields {
                        name
                        email
                        message
                    }
                }
            }
        }
    `);
    return (
        <form className={bootstrap.w100} onSubmit={handleSubmit}>
            <div className={bootstrap.row}>
                <div className={bootstrap.colMd6}>
                    <Field
                        name="name"
                        label="Jméno a příjmení"
                        placeholder="Tvoje jméno"
                        component={StringInput}
                        validate={[required]}
                        id={fields.name}
                    />
                </div>
                <div className={bootstrap.colMd6}>
                    <Field
                        name="email"
                        label="E-mail"
                        placeholder="Tvůj e-mail"
                        component={StringInput}
                        validate={[required, validEmail]}
                        id={fields.email}
                    />
                </div>
            </div>
            {error && <ErrorAlert>{error}</ErrorAlert>}
            <Field
                component={TextInput}
                name="message"
                placeholder="O která řemesla máš zájem? Chceš nám vzkázat něco dalšího?"
                id={fields.message}
            />
            <Center>
                <SubmitContainer />
            </Center>
        </form>
    );
};

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
};

Form.defaultProps = {
    error: null,
};

const mapStateToProps = (state) => ({
    intervals: getIntervals(state),
});

export default R.compose(
    connect(mapStateToProps),
    reduxForm({
        form: REGISTRATION_FORM,
        onSubmit: (values, dispatch) => dispatch(submit(values)),
        initialValues: {
            'photo-agreement': true,
        },
    }),
)(Form);
