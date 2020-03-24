import React from 'react';
import {Link} from 'react-scroll';
import {useNavbarContext} from './navbarContext';

export default (props) => {
    const {height} = useNavbarContext();
    return (
        <Link
            {...props}
            offset={-height}
            smooth
        />
    );
};
