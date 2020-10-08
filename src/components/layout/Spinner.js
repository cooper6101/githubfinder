import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export const Spinner = () => <Fragment>
            <img src={spinner} alt='loading...' style={spinnerStyle}></img>
        </Fragment>

const spinnerStyle = {
    width: '200px',
    margin: 'auto',
    display: 'block'
}

export default Spinner;

