import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isSubmitted} from '../selectors';
import {PrimaryAlert} from '../components';
import SubmitButton from './SubmitButton';

const SubmitContainer = ({submitted}) => {
    if (submitted) {
        return <PrimaryAlert>Děkujeme za přihlášku. Do 15. 5. se ti ozveme.</PrimaryAlert>;
    } else {
        return <SubmitButton />;
    }
};

SubmitContainer.propTypes = {
    submitted: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    submitted: isSubmitted(state),
});

export default connect(mapStateToProps)(SubmitContainer);
