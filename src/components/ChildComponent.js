// import React from 'react'

// const ChildComponent = (props) => {
//   return (
//     <div>
//       <p>ChildComponent.js</p>
//       <p>The value of the name prop is: {props.name}</p>
//       <input onChange={(e) => props.handleChange(e)} />
//     </div>
//   )
// }

// export default ChildComponent

import React, { Component } from 'react'
import GrandchildComponent from './GrandchildComponent'

class ChildComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>ChildComponent.js</p>
        <p>The value of the name prop is: {this.props.name}</p>
        <input onChange={(e) => this.props.handleChange(e)} />
        <GrandchildComponent name={this.props.name} />
      </div>
    )
  }
}
export default ChildComponent
