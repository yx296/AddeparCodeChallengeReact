import React from 'react';

export default class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    }
  }
  render() {
    return (
      <div className={this.props.position + " box " + this.state.color} onClick={this.turnBoxRed}></div>
    )
  }
  
  turnBoxRed = () => {
    if (this.state.color === 'green'|| this.props.isUnwinding) {
      return;
    }
    
    this.setState({
      color: 'green'
    });
    this.props.onAddBox(this);
  }
}
