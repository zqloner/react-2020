//创建并暴露外壳组件App
import React,{Component} from 'react'
import Hello from "./components/Hello";
import Welcom from "./components/Welcom";

export default class App extends Component{
  render() {
    return (
      <div>
        <Hello/>
        <Welcom/>
      </div>
    )
  }
}
