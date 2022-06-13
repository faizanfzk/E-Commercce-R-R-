import {combineReducers,legacy_createStore,applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./Auth/reducer"
import { prodReducer } from "./Products/reducer"

const rootReducer=combineReducers({
    ecommerceData: prodReducer,
    authReducer
})

const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))