import React, { Component } from 'react';
import SingleExerciseHistory from './SingleExerciseHistory';

class SingleWorkoutHistory extends Component {
    state = {
        showWorkout: false
    }

    generateExcercises = exercises => {
        return exercises.length 
        ? exercises.map((exercise, idx) => <SingleExerciseHistory exercise={exercise} key={'SWH' + idx} />) 
        : null
    }

    toggleWorkout = () => {
        this.setState({ showWorkout: !this.state.showWorkout})
    }

    dateFormat = (date) => {
        let sliced = date.slice(2,10)
        let newDate = sliced.slice(6) + '-' + sliced.slice(3,5) + '-' + sliced.slice(0,2)
        return newDate
    }

    render() {
        const { date, exercises } = this.props
        return (
            <>
                <div className="container historyNames" style={{display: 'flex', justifyContent: 'center'}}>
                    <h3 className="exerciseDates"> Workout done on {date ? this.dateFormat(date) : null}</h3> 
                    {this.state.showWorkout ? <button className="dropDown" onClick={this.toggleWorkout}> <img alt="" className="dropDownImg" width="18" src={require('../../images/dropup.png')} /> </button> :
                    <button className="dropDown" onClick={this.toggleWorkout}> <img alt="" className="dropDownImg" width="18" src={require('../../images/dropdown.png')} /> </button> }
                </div>
                <div>
                    {this.state.showWorkout && this.generateExcercises(exercises)}
                </div>
            </>
        );
    }
}

export default SingleWorkoutHistory;