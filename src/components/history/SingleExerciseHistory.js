import React, { Component } from "react";

class SingleExerciseHistory extends Component {
  mapOverSets = exercise => {
    const setLength = exercise.lifts.length;
    return exercise.lifts ? (
      exercise.lifts.map((lift, idx) => (
        <p key={"SEH" + idx}>
          {lift.reps} x {lift.weight ? lift.weight : "Bodyweight"}
          {idx + 1 === setLength ? "." : ","}
        </p>
      ))
    ) : (
      <p> Still loading.. </p>
    );
  };

  render() {
    const { exercise } = this.props;
    return (
      <div style={{ textAlign: "center" }}>
        <h3>
          {" "}
          Exercise:{" "}
          {exercise.name.charAt(0).toUpperCase() + exercise.name.slice(1)}{" "}
        </h3>
        {this.mapOverSets(exercise)}
        <br />
      </div>
    );
  }
}

export default SingleExerciseHistory;
