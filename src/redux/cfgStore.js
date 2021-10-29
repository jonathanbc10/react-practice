import { createStore } from "redux";
import { Reducer, initialState } from './reducer';

export const CfgStore = () => {
    const store = createStore(
        Reducer,
        initialState
    )

    return store;
}