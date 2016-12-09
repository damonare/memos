import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, browserHistory, Router} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './container/App';
import configureStore from './stores';
import './main.less';
const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
    <App />
</Provider>,
 document.body.appendChild(document.createElement('div')))
// ReactDOM.render(
//     <Router history={browserHistory}>
//         <Route path="/"  component={TodoList}>
//           <IndexRoute component={AllMemos}/>
//           <Route path="/todo" component={ListTodoMemos}/>
//           <Route path="/doing" component={ListDoingMemos}/>
//         </Route>
//     </Router>,
//     document.body.appendChild(document.createElement('div')));
