import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor() {
    super()
    this.state = {
      myName: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      myName: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <p>ParentComponent.js</p>
        <ChildComponent
          andrewProp="This is my prop"
          andrewAge={28}
          name={this.state.myName}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}
export default ParentComponent
