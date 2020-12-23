import React,{Component} from "react";
import PubSub from 'pubsub-js'

import './index.css'

export default class List extends Component {
  state = {
    users:[],   //初始化状态,users初始值为数组
    isFirst:true,  //是否为第一次打开页面
    isLoading:false, //标识是否处于加载中
    error:''   //存储请求相关的错误信息。
  }

  //更新App的state
  // updateAppState = (stateObj)=>{
  //   this.setState(stateObj)
  // }

  componentDidMount() {
    this.token = PubSub.subscribe('atguigu',(msg,data)=>{
      this.setState(data)
      })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const{users,isFirst,isLoading,error} = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用,输入关键字,随后点击搜索</h2>:isLoading ? <h2>Loading...</h2>:error ? <h2 style={{color:'red'}}>{error}</h2>:
            ( users.map(user=>(
              <div className="card" key={user.id}>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  <img alt='head_portrait' src={user.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )))
        }
      </div>
    );
  }
}
