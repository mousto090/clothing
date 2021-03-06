import { createStore , applyMiddleware, compose} from "redux";
import logger  from "redux-logger";
import reducers from "./reducers";
import { persistStore } from "redux-persist";

//Allow debuging with redux extension in development
// eslint-disable-next-line no-undef
const composeEnhancers = (process.env.NODE_ENV === 'development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
// const sagaMiddleware = createSagaMiddleware();

const middlewares = [];
if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
//configure store
const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));
//allow persit store to browser storage 
export const persitor = persistStore(store);

export default store;