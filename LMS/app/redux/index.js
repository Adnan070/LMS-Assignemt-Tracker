import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer/index';

// const middlewares = [thunk];

// const enhancer = composeWithDevTools({
//   // Options: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#options
// })(applyMiddleware(...middlewares));

// export default function configureStore(initialState) {
//   const store = createStore(reducer, initialState, enhancer);
//   if (module.hot) {
//     module.hot.accept(() => {
//       store.replaceReducer(require('./reducer').default);
//     });
//   }
//   return store;
// }

let middlewaresToApply = [thunk];

// if (__DEV__) {
//   const createFlipperDebugger = require('redux-flipper').default;
//   middlewaresToApply.push(createFlipperDebugger());
// }

const middleware = applyMiddleware(...middlewaresToApply);

// export default createStore(reducer, middleware);

// Store with React Native Debugger support
const composeEnhancers = composeWithDevTools({});
const enchancedMiddleware = composeEnhancers(middleware);
export default createStore(reducer, {}, enchancedMiddleware);

// import {createStore, compose, applyMiddleware} from 'redux';
// import rootReducer from './reducer';
// import thunk from 'redux-thunk';

// export default function configureStore(initialState) {
//   return (store = createStore(
//     rootReducer,
//     initialState,
//     compose(applyMiddleware(thunk)),
//   ));
// }

// import {createStore, applyMiddleware} from 'redux';
// import {composeWithDevTools} from 'remote-redux-devtools';

// const composeEnhancers = composeWithDevTools({realtime: true, port: 8097});
// const store = createStore(
//   reducer,
//   {},
//   composeEnhancers(
//     applyMiddleware(thunk),
//     // other store enhancers if any
//   ),
// );

// export default store;
