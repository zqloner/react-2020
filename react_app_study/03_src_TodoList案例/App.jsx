import React,{Component} from "react";

import './App.css'
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
  state = {
    todos:[
      {id:'001',name:'吃饭',done:true},
      {id:'002',name:'睡觉',done:true},
      {id:'003',name:'打代码',done:false},
      {id:'004',name:'逛街',done:true}
    ],
  }

  //添加todo函数
  addTodo = (todoObj)=>{
    //获取原todos
    const {todos} = this.state
    //追加一个todo
    const newTodos = [todoObj,...todos]
    //更新状态
    this.setState({todos:newTodos})
  }

  //更新todo函数
  updateTodo = (id,done)=>{
    //获取原todos
    const {todos} = this.state
    //匹配更改todo
    const newTodos =todos.map((todoObj)=>{
      if (todoObj.id === id) {
        return {...todoObj,done}
      }else return todoObj
    })
    //更新状态
    this.setState({todos:newTodos})
  }

  //删除todo函数
  deleteTodo = (id)=>{
    //获取原todos
    const {todos} = this.state
    //匹配更改todo
    const newTodos =todos.filter((todoObj)=>{
     return todoObj.id !== id  //返回id不相等。id相等的过滤掉。意思就是, //过滤掉为false的。留下为true的
    })
    //更新状态
    this.setState({todos:newTodos})
  }

  //定义全选全不选
  checkAllTodo = (done)=>{
    //获取原todos
    const {todos} = this.state
    //加工数据
    const newTodos =todos.map((todoObj)=>{
     return {...todoObj,done}
    })
    //更新状态
    this.setState({todos:newTodos})
  }
  //清楚所有已完成的
  handleClearAllDone = (done)=>{
    //获取原todos
    const {todos} = this.state
    //加工数据
    const newTodos =todos.filter(todoObj=> !todoObj.done)   //过滤掉为false的。留下为true的
    //更新状态
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos}  updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} handleClearAllDone={this.handleClearAllDone}/>
        </div>
      </div>
    );
  }
}
