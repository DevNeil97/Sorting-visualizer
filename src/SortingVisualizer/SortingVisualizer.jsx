import { render } from '@testing-library/react';
import React from 'react';
import './SortingVisualizer.css';

this.state = {
    Array: [],
};

componentDidMount(){
    this.resetArray();
}

resetAarray(){
    const array[];
    for (let i = 0; i < 100; i++) {
        array.push(randomIntFromInterval(5, 1000))
    }
    this.setState({ array });
}

render(){
    const { array } = this.state;
}