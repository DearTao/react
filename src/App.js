import React, { Component } from 'react'
import {Button,List} from 'antd-mobile'

class One extends Component {
  constructor(props){
    super(props)
    this.state = {
      solders:['王二','张三','李四']
    }
    // this.addSolder=this.addSolder.bind(this)
  }
  componentWillMount(){
    console.log('组件马上就要加载了')
  }
  componentDidMount(){
    console.log('组件加载完毕')
  }
  addSolder(){
    console.log('hello new solder!')
    this.setState({
      solders:[...this.state.solders,'新兵蛋子'+Math.random()]
    })
  }
  render() {
    console.log('组件正在加载中')
    return (
      <div>
        <h3>一营，营长{this.props.Yboss}</h3>
        <Button type='primary' onClick={()=>this.addSolder()}>新兵入伍</Button>
        {/* <Button onClick={this.addSolder}>新兵入伍</Button> */}
        <List renderHeader={()=>'士兵列表'}>
          {
            this.state.solders.map(v=>{
              return <List.Item key={v}>{v}</List.Item>
            })
          }
        </List>
        {/* <ul>
          {
            this.state.solders.map(v=>{
              return <li key={v}>{v}</li>
            })
          }
        </ul> */}
      </div>
    )
  }
}
function Two(props){
  return <div>骑兵连连长{props.Lboss},冲啊！</div>
}

export default class App extends Component {
  render() {
    const boss = '李云龙'
    return (
      <div>
        <h1>独立团，团长{boss}</h1>
        <One Yboss='张大喵'></One>
        <Two Lboss='马爸爸'></Two>
      </div>
    )
  }
}
