import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import "antd/dist/antd.css";

import Counter from './Counter';

// import App from './App';
// import { HashRouter as Router} from "react-router-dom";
// import CustomLink from './containers/CustomLink';
// import AuthExample from './auth/AuthExample';
import { Provider } from 'react-redux';
import store from './store'
import TodoList from './TodoList';

ReactDOM.render(
    <div style={{padding:'30px'}}>
        <Counter/>
        <Provider store={store}>
            <TodoList/>
        </Provider>
    </div>,
    document.getElementById('root')
)


// ReactDOM.render(
//     <AuthExample/>,
//     document.getElementById('root')
// )

// ReactDOM.render(
//     <Counter/>,
//     document.getElementById('root')
// )

// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>,
//     document.getElementById('root')
// )

