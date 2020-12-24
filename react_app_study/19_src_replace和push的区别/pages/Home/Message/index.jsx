import React,{Component} from "react";
import {Link,Route} from "react-router-dom";

import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messageArr:[
      {id:'01',title:'消息1'},
      {id:'02',title:'消息2'},
      {id:'03',title:'消息3'},
      {id:'04',title:'消息4'},
    ]
  }
  render() {
    const {messageArr} =  this.state
    return (
      <div>
        <ul>
          {messageArr.map(item=>
              (
                <li key={item.id}>
                  {/*   向路由组件传递 state 参数,to的值是一个对象  */}
                  {/*   默认是push压栈模式   如何替换为repalce模式方法? 在路由链接上加上:'replace={true}'或者'replace'  */}
                  <Link replace={true} to={{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link>&nbsp;&nbsp;
                </li>
              )
            )}
        </ul>
        <hr/>
        {/*  这种state传参数,无需声明接收,正常注册即可 */}
        <Route path="/home/message/detail" component={Detail}/>
      </div>
    );
  }
}
