import React from 'react';

class Counter extends React.Component{
    number=0;

    increase=()=>{
        console.log('increase', this.number);
        this.number++;
    }

    decrease=()=>{
        console.log('decrease');
        this.number--;
    }

    render(){
        return(
            <div>
                <h1>Counter</h1>
                <h1>{this.number}</h1>
                <button onClick={this.increase}>+1</button>
                <button onClick={this.decrease}>-1</button>
            </div>
        )
    }
}

export default Counter;