import { action, observable } from "mobx";

export default class CounterStore{
    @observable number=0;

    @action
    increase=()=>{
        console.log('increase called, ', this.number);
        this.number++;
    }

    @action
    decrease=()=>{
        console.log('decrease called, ', this.number);
        this.number--;
    }
}