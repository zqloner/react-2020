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
                  {/*   向路由组件传递params参数  */}
                  <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>&nbsp;&nbsp;
                </li>
              )
            )}

          {/*<li>*/}
          {/*  <a href="/message1">message001</a>&nbsp;&nbsp;*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <a href="/message2">message002</a>&nbsp;&nbsp;*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <a href="/message/3">message003</a>&nbsp;&nbsp;*/}
          {/*</li>*/}
        </ul>
        <hr/>
        {/* 声明接收params参数*/}
        <Route path="/home/message/detail/:id/:title" component={Detail}/>
      </div>
    );
  }
}
