import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increaseTimer } from '../actions';


class Timer extends Component {

    componentDidMount() {

        const { increase } = this.props;

        setInterval( () => increase(), 1000);
    }

    render() {

        const { count } = this.props;

        return (
            <div className="app__timer">
                { count }
            </div>
        )
    }
}


Timer.propTypes = {
  count: PropTypes.number
};

const mapStateToProps = state => ({
    count: state.values.timer
});

export default connect(mapStateToProps, {
    increase: increaseTimer
})(Timer);