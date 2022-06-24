import {legacy_createStore} from "redux";
import {reducer} from "./reducer";
// legacy_createStore

export const store=legacy_createStore(reducer);