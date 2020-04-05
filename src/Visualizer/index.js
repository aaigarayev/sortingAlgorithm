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
        // empty an array in case there is something left
        this.setState({array});
        
        const barCounter = (counter) => {
            if (counter < 300) {
                setTimeout(() => {
                    // adding random number using the external function
                    array.push(randomIntFromInterval(5, 600));
                    // once a value is set, adding it to the array
                    this.setState({array});
                    counter++;
                    // recursively calling the function
                    barCounter(counter);
                }, 25);
            } 
        }
        barCounter(0)
    }

    render() {
        const {array} = this.state;

        return (
            <React.Fragment>
                <div className='btn-container'>
                    <button 
                    className='sort-btn'
                    onClick={() => this.resetArray()} 
                    disabled={array.length < 300}>
                        Generate a new array
                    </button>
                    <button 
                    className='sort-btn'
                    onClick={() => console.log('Merge sort')} 
                    disabled={array.length < 300}>
                        Merge sort
                    </button>
                    <button 
                    className='sort-btn'
                    onClick={() => console.log('Bubble sort')} 
                    disabled={array.length < 300}>
                        Bubble sort
                    </button>
                    <button 
                    className='sort-btn'
                    onClick={() => console.log('Insertion sort')} 
                    disabled={array.length < 300}>
                        Insertion sort
                    </button>
                    <button 
                    className='sort-btn'
                    onClick={() => console.log('Selection sort')} 
                    disabled={array.length < 300}>
                        Selection sort
                    </button>
                    <button 
                    className='sort-btn'
                    onClick={() => console.log('Quicksort')} 
                    disabled={array.length < 300}>
                        Quicksort
                    </button>
                </div>
                <div className="main-container">
                    <div className="array-container">
                        {array.map((value, idx) => (
                            <div 
                            className="array-bar" 
                            key={idx}
                            // giving the height using their value which is selected randomly
                            style={{height: `${value}px`,
                            marginTop: `${620 - value}px`}}>
                            </div>
                        ))}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}