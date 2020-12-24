import React,{Component} from "react";

const DetailData = [
  {id:'01',content:'你好,中国'},
  {id:'02',content:'你好,未来'},
  {id:'03',content:'你好,盟固利'},
  {id:'04',content:'你好,世界'},
]
export default class Detail extends Component {
  render() {
    //  接收state参数方式传递的值。可以在 this.props.location.state 中找到。(刷新也可以保留住参数)
    console.log("search",this.props.location.state)
    const {id,title} = this.props.location.state || {}
    const finalResult = DetailData.find((datailObj)=>{
        return datailObj.id === id
      }) || {}
    return (
      <ul>
        <li>Id:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{finalResult.content}</li>
      </ul>
    );
  }
}
