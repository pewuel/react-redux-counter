import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Counter = ({ count }) => {
    return (
        <div className="app__counter">
            {count}
        </div>
    )
};

const mapStateToProps = state => ({
    count: state.values.counter
});

Counter.propTypes = {
  count: PropTypes.number
};

export default connect(mapStateToProps)(Counter);