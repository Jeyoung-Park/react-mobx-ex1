import { inject, observer } from 'mobx-react';
import React from 'react';

/*
특정 스토어만 가져오는 경우
@inject(stores=>({
    number:stores.counter.number,
    increase:stores.counter.increase,
    decrease:store.counter.decrease,
}))
*/

// injext('스토어명): 해당 스토어의 observable 값과 action 함수를 가져옴 (counter에 있는 모든 스토어를 가져오는 경우)
@inject('counter')
@observer // decorator 적용
class Counter extends React.Component{
    

    render(){
        const {counter}=this.props;

        console.log('counter in Counter.jsx, ', counter);
        
        return(
            <div>
                <h1>Counter</h1>
                <h1>{counter.number}</h1>
                <button onClick={counter.increase}>+1</button>
                <button onClick={counter.decrease}>-1</button>
            </div>
        )
    }
}

export default Counter;