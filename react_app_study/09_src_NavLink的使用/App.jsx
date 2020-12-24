import React,{Component} from "react";
import {NavLink,Route} from 'react-router-dom'

import Home from "./pages/Home";
import About from "./pages/About";

import Header from "./components/Header";

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
                  {/*路由链接*/}
                  {/*<Link className="list-group-item" to="/about">About</Link>  /!*Link标签必须包含在Router中*!/*/}
                  {/*<Link className="list-group-item" to="/home">Home</Link>*/}
                  <NavLink activeClassName="testNavLink" className="list-group-item" to="/about">About</NavLink>  {/*NavLink标签默认点中会追加'active'类名*/}
                  <NavLink activeClassName="testNavLink" className="list-group-item" to="/home">Home</NavLink>    {/*NavLink用activeClassName可以指定追加的类名,比如我们给testNavLink类添加红色样式*/}
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                    {/*     注册路由     */}
                    <Route path="/about" component={About} />
                    <Route path="/home" component={Home} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
