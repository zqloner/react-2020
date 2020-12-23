import React,{Component} from "react";

import './index.css'

export default class List extends Component {
  render() {
    const{users,isFirst,isLoading,error} = this.props
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用,输入关键字,随后点击搜索</h2>:isLoading ? <h2>Loading...</h2>:error ? <h2 style={{color:'red'}}>{error}</h2>:
            ( this.props.users.map(user=>(
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
