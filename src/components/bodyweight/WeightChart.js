import React, { Component } from 'react';
import { Line } from 'react-chartjs-2'

class WeightChart extends Component {
    getChartData = () => {
        return {
            labels: this.props.weights.map(weight => (this.props.dateFormat(weight.date))),
            datasets: [
                {
                    label:'Body Weight over Time',
                    data:
                        this.props.weights.map(weight => weight.weight),
                    backgroundColor: 'rgba(183, 99, 194, 0.2)',
                    borderColor: 'rgba(147, 78, 156)'
                }
            ]
        }
    }

    render() {
        return (
            <>
                <Line 
                    id="graph"
                    data={this.getChartData()}
                    options={{}}
                    redraw
                />
            </>
        );
    }
}

export default WeightChart;