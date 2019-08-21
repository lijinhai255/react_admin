import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
//引入路由
import Login from "./pages/login/Login"
import Admin from "./pages/admin/Admin"
//y引入头部组件
import './App.css';
export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch> {/*只匹配其中一个*/}
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Admin}></Route>
        </Switch>
      </HashRouter>
    )
  }
}

