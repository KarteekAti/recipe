import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';

const store = createStore(reducers,compose(applyMiddleware(thunk)))
const root = createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <App />, 
    </Provider>
);