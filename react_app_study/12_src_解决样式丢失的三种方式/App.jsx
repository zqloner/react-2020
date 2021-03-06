import React,{Component} from "react";
import {Switch,Route} from 'react-router-dom'

import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header></Header>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
{/*                原生html中靠<a>跳转到不通的页面*/}
{/*                <a className="list-group-item" href="./about.html">About</a>
                   <a className="list-group-item active" href="./home.html">Home</a>  */}

{/*                在React中靠路由链接实现切换组件*/}
                  {/*三种路由链接使用的方法*/}
                  {/*1,使用Link*/}
                        {/*<Link className="list-group-item" to="/about">About</Link>  /!*Link标签必须包含在Router中*!/*/}
                        {/*<Link className="list-group-item" to="/home">Home</Link>*/}
                  {/*2,使用NavLink*/}
                       {/*NavLink标签默认点中会追加'active'类名*/}
                       {/*NavLink用activeClassName可以指定追加的类名,比如我们给testNavLink类添加红色样式*/}
                      {/*<NavLink activeClassName="testNavLink" className="list-group-item" to="/about">About</NavLink>
                      <NavLink activeClassName="testNavLink" className="list-group-item" to="/home">Home</NavLink>   */}
                  {/*3,使用MyNavLink*/}
                      {/*标签体内容可以通过children属性指定。会自动收集到MyNavLink的props的children属性上*/}
                      <MyNavLink to="/mgl/about" children="About"/>
                      <MyNavLink to="/mgl/home" children="Home"/>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                    {/*     注册路由     */}
                  <Switch>
                    <Route path="/mgl/about" component={About} />
                    <Route path="/mgl/home" component={Home} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
