import React,{Component} from "react";
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'


import './index.css'

export default class Header extends Component {

  //对接受的props进行类型丶必要性限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  //键盘事件
  handleKeyUp = (event)=> {
    const {keyCode,target} = event
    if (keyCode !== 13) return
    //添加的todo名字不能为空
    if(target.value.trim()===''){
      alert("todo名字不能为空")
      return;
    }
    //准备一个对象
    const todoObj = {id:nanoid(),name:target.value,down:false}
    //将todoObj传递给App组件
    this.props.addTodo(todoObj)
    //清空输入
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    );
  }
}
