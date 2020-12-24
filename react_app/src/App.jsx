import React,{Component} from "react";
import { Button } from 'antd';
import 'antd/dist/antd.css'
import {WechatOutlined} from '@ant-design/icons';

export default class App extends Component {
  render() {
    return (
      <div>
        App.....
        <button>点我</button>
        <Button type="primary">按钮1</Button>
        <Button type="primary" >按钮2</Button>
        <WechatOutlined />
      </div>
    );
  }
}
