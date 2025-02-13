import { combineReducers } from "redux"
import  zooReducer from "./reducers/ZooSlice"

const rootReducer = combineReducers({
    zoo: zooReducer
})

export default rootReducer;