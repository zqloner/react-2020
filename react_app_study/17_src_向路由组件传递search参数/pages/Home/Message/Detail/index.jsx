import React,{Component} from "react";
//urlencoded编码字符串:类似于  'a=b&c=d&e=f'
//操作urlencoded编码字符串,类似于js的JSON
//对象和urlencoded字符串之间转换
//无需安装。react自带。
import qs from 'querystring'

const DetailData = [
  {id:'01',content:'你好,中国'},
  {id:'02',content:'你好,未来'},
  {id:'03',content:'你好,盟固利'},
  {id:'04',content:'你好,世界'},
]
export default class Detail extends Component {
  render() {
    //  接收search参数方式传递的值。可以在  this.props.location.search 中找到。
    console.log("search",this.props.location.search)   //输出结果为: '?id=02&title=消息2'是urlencoded编码字符串，可以借助querystringjiejue
    const {search} = this.props.location
    const result = qs.parse(search.slice(1)) //这一步是将'?id=02&title=消息2'字符串去除第一个字符后转换为:{id: "04", title: "消息4"}
    console.log("result",result)   //{id: "04", title: "消息4"}
    const {id,title} = result
    const finalResult = DetailData.find((datailObj)=>{
        return datailObj.id === id
      })
    return (
      <ul>
        <li>Id:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{finalResult.content}</li>
      </ul>
    );
  }
}
