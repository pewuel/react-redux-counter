import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { counterClick } from '../actions';

const IncreaseButton = ({increase}) => {
    return (
        <button className="btn" onClick={increase}>
            Increase
        </button>
    )
};

IncreaseButton.propTypes = {
  increase: PropTypes.func
};


export default connect(null, {
    increase: counterClick
})(IncreaseButton);