import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Manager, Reference} from 'react-popper';

import useTooltip from './useTooltip';
import {cellWidth} from './variables.scss';
import IntervalContext from './IntervalContext';
import RowColorContext from './RowColorContext';
import Tooltip from './Tooltip';
import styles from './TimeSlot.module.scss';

const colorTable = {
    goldenrod: styles.goldenrod,
    copper: styles.copper,
    green: styles.green,
    steel: styles.steel,
    red: styles.red,
    purple: styles.purple,
};

const TimeSlot = ({start, end, children, disabled, active, onClick, tooltip, onMount, color}) => {
    const interval = useContext(IntervalContext);
    const contextColor = useContext(RowColorContext);
    const finalColor = color || contextColor;
    const [showTooltip, onMouseEnter, onMouseLeave] = useTooltip(250);
    useEffect(onMount, []);

    const left = (start - interval.start) * cellWidth;
    const width = (end - start) * cellWidth;

    return (
        <Manager>
            <div
                style={{left, width}}
                className={classnames(styles.wrapper, colorTable[finalColor])}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <Reference>
                    {({ref}) => (
                        <button
                            ref={ref}
                            type="button"
                            className={classnames(styles.main, {
                                [styles.active]: active && !disabled,
                            })}
                            onClick={onClick}
                            disabled={disabled}
                        >
                            {children}
                        </button>
                    )}
                </Reference>
                {tooltip && showTooltip && <Tooltip>{tooltip}</Tooltip>}
            </div>
        </Manager>
    );
};

TimeSlot.propTypes = {
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    tooltip: PropTypes.string,
    onMount: PropTypes.func.isRequired,
    color: PropTypes.oneOf(Object.keys(colorTable)),
};

TimeSlot.defaultProps = {
    disabled: false,
    active: false,
    tooltip: null,
    color: null,
};

export default TimeSlot;
