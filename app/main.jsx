import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, hashHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import App from './container/App';
import AllMemosRoute from './routes/AllMemosRoute';
import TodoRoute from './routes/TodoRoute';
import DoingRoute from './routes/DoingRoute';
import DoneRoute from './routes/DoneRoute';
import configureStore from './stores';
import './main.less';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route
                path="/"
                component={App}
            >
                <IndexRoute component={AllMemosRoute} />
                <Route path="/todo" component={TodoRoute} />
                <Route path="/doing" component={DoingRoute} />
                <Route path="/done" component={DoneRoute} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
