import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../Reducers/index";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../Sagas/api-sagas";

const initialiseSagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(initialiseSagaMiddleware))
);

initialiseSagaMiddleware.run(apiSaga);

export default store;