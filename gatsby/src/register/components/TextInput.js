import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import styles from './TextInput.module.scss';
import bootstrap from '../../bootstrap.module.scss';

const TextInput = ({onChange, ...rest}) => (
    <textarea
        {...rest}
        onChange={R.pipe(R.prop('target'), R.prop('value'), onChange)}
        className={classnames(styles.main, bootstrap.formControl)}
    />
);

TextInput.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default TextInput;
