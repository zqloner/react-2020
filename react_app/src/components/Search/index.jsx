import React,{Component} from "react";
// import axios from "axios";
import PubSub from 'pubsub-js'

export default class Search extends Component {
  search = ()=>{
    //获取用户的输入。下面使用(连续解构赋值+重命名)
    const {keyWordNode:{value:keyWord}} = this     //先从this中解构出keyWordNode，再从keyWordNode中解构出value,再将value重命名为keyWord
    // console.log(keyWordNode)  这里keyWordNode是未定义的。
    console.log(keyWord)

    //发送请求前通知List更新状态
    // this.props.updateAppState({isFirst:false,isLoading:true})
    PubSub.publish('atguigu',{isFirst:false,isLoading:true})

    //发送网络请求
    //github地址:   http://api.github.com/search/users?q=xxxxxx     这是一个get请求。

    //#region  使用axios发送ajax
    //       axios.get(`/search/users2?q=${keyWord}`)
    //         .then(
    //           response=>{
    //             //请求成功后通知List更新状态
    //             // this.props.updateAppState({isLoading:false,users:response.data.items})
    //             PubSub.publish('atguigu',{isLoading:false,users:response.data.items})
    //             console.log('成功了',response.data)
    //           },
    //           error=>{
    //             console.log('失败了',error)
    //             //请求失败后通知List更新状态
    //             // this.props.updateAppState({isLoading:false,error:error.message})
    //             PubSub.publish('atguigu',{isLoading:false,error:error.message})
    //           }
    //         )
    //#endregion

    //发送网络请求-------》使用Fetch发送
    fetch(`/search/users2?q=${keyWord}`).then(
      //若果.then里面的内容返回的值是非Promise值 。那么这个Promise的状态就为成功的,值就为非Promise值。
      // 例如:(断网了,下面请求就会联系服务器失败,从而返回undefined,而undefined为非Promise值。所以Promise是成功的,
      // 所以下一个then就会走成功的回调。也是就是 "获取数据成功了,undefined")
      response => {
      console.log('联系服务器成功了',response)
      return response.json()
    }, error=> {
      console.log('联系服务器失败了',error)
    }
    ).then(
      response => {
        console.log('获取数据成功了',response)
      }, error=> {
        console.log('获取数据失败了',error)
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={c => this.keyWordNode = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
