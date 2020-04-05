import React, {Component} from 'react';
import {randomIntFromInterval} from '../stateless/randomIntFromInterval';
import './index.css';

export default class Visualizer extends Component {
    constructor(props) {
        super(props);

        // initial state array is empty
        this.state = {
            array: [],
        };
    }

    componentWillMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        
        const barCounter = (counter) => {
            if (counter < 200) {
                setTimeout(() => {
                    // adding random number using the external function
                    array.push(randomIntFromInterval(5, 600));
                    // once a value is set, adding it to the array
                    this.setState({array});
                    counter++;
                    // recursively calling the function
                    barCounter(counter);
                }, 50);
            } 
        }
        barCounter(0)
    }

    render() {
        const {array} = this.state;

        return (
            <div className="main-container">
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div 
                        className="array-bar" 
                        key={idx}
                        style={{height: `${value}px`,
                                marginTop: `${600 - value}px`}}>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}