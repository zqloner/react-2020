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
                  <MyNavLink to="/about" children="About"/>
                  {/*  默认是模糊匹配。路由链接: /home/a/b 可以匹配到路由path为/home的。 前面拆成  home    a   b ,前面匹配到了后面的就不管了 */}
                  {/*  默认是模糊匹配。路由链接: /a/home/b 不可以匹配到路由path为/home的。 前面拆成 a home b ,第一个没匹配到就算没匹配到  */}
                  {/*  开启严格匹配：在路由上添加属性 exact={true} 或者添加 exact就可以  */}
                  <MyNavLink to="/home/a/b" children="Home"/>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  <Switch>
                    <Route path="/about" exact={true} component={About} />
                    <Route path="/home" exact component={Home} />
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
