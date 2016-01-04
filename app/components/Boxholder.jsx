import React from 'react';
import Box from './Box.jsx';

export default class Boxholder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: [],
      isUnwinding: false
    }
  }
  render() {
    const boxPositions = this.props.boxPositions;
    let isUnwinding = this.state.isUnwinding;
    return (
      <div className="boxHolder">
        {boxPositions.map((e, i) => 
          <Box isUnwinding={isUnwinding}
               key={i} 
               position={e} 
               onAddBox={this.addClickedBox}>
          </Box>
        )}
      </div>
    )
  }

  addClickedBox = (e) => { 
    const clicked = this.state.clicked.slice();
    clicked.push(e);

    const numberOfBoxes = this.props.boxPositions.length;
    
    this.setState({
      clicked: clicked
    })

    if (clicked.length === numberOfBoxes) {
      this.setState({
        isUnwinding: true
      })
      setTimeout( ()=> {
        this.turnBoxesRed();
      }, 500);
    }
  }

  turnBoxesRed = () => {
    const clicked = this.state.clicked.slice();
    
    let turnBoxRed = setInterval( ()=> {
      var box = clicked.pop();
      this.setState({clicked: clicked})
      box.setState({color: 'red'})
      if (!clicked.length) {
        clearInterval(turnBoxRed);
        this.setState({
          isUnwinding: false
        })
      }
    }, 500)
  }
}




