import React,{Component} from "react";

import './index.css'

export default class Footer extends Component {
  //全选全不选的回调
  handleCheckAll=(event)=>{
    this.props.checkAllTodo(event.target.checked);
    };
  //清楚所有的已完成的
  handleClearAllDone=()=>{
    this.props.handleClearAllDone();
    };
  render() {
    const {todos} = this.props
    //统计已完成的。
    const doneCount = todos.reduce((pre,todo)=>pre + (todo.done ? 1:0),0)
    console.log('doneCount',doneCount)
    //总数
    const totalCount = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount===totalCount && totalCount !==0?true:false} onChange={this.handleCheckAll}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{totalCount}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}
