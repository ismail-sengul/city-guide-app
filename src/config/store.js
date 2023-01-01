import { createStore } from "redux";
import attractionReducer from "../reducers/attractionReducer";


export const store = createStore(attractionReducer);