import { createStore , applyMiddleware, compose} from "redux";
//import logger  from "redux-logger";
import reducers from "./reducers";

//Allow debuging with redux extension in development
// eslint-disable-next-line no-undef
const composeEnhancers = (process.env.NODE_ENV === 'development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
// const sagaMiddleware = createSagaMiddleware();

const middlewares = []//[logger]
//configure store
const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));


export default store;