import React,{Component} from "react";
import welcom from './index.module.css'

export default class Index extends Component {
  render() {
    return (
        <h2 className={welcom.title}>
          Hello,React!
        </h2>
    );
  }
}
