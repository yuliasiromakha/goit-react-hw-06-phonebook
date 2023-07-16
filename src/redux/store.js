import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import contactReducer from "./reducer";

const rootReducer = combineReducers({
    contacts: contactReducer,
});


const enhancer = devToolsEnhancer();

const store = createStore(rootReducer, enhancer);


export default store;