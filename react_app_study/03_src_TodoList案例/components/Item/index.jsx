import React,{Component} from "react";
import PropTypes from 'prop-types'

import './index.css'

export default class Item extends Component {

  //对接受的props进行类型丶必要性限制
  static propTypes = {
    updateTodo:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired
  }
  state = {
    mouse:false
  }
//鼠标移入移除
  handleMouse = (flag)=>{
      return ()=>{
        this.setState({
          mouse:flag
        })
        }
    }
    //勾选或者取消勾选某个todo
  handleCheck = (id)=>{
      return (event)=>{
        console.log(id,event.target.checked)
        this.props.updateTodo(id,event.target.checked)
        }
    }
    //删除一个todo的回调（不用高阶函数的写法）
    handleDelete = (id)=>{
      this.props.deleteTodo(id)
      }
  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
        <li style={{backgroundColor:mouse?"#ddd":'white'}} onMouseEnter={this.handleMouse(true)}onMouseLeave={this.handleMouse(false)}>
          <label>
            <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
            <span>{name}</span>
          </label>
          <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}} >删除</button>
        </li>
    );
  }
}
