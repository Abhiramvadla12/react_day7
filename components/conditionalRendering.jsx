import  { Component } from 'react'

export default class Cond extends Component {
    
  render() {
    console.log(this.props.isLoggedIn);
    return (
      <>
        {
            this.props.isLoggedIn ? <h1>hi welcome User</h1>
            :
            <h1>please enter true in prompt</h1>
        }
      </>
    )
  }
}
