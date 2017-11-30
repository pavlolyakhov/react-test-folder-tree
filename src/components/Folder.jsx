import React, {Component} from 'react'
import '../main.css';

class Folder extends Component{

  render(){
    const marginOffset = this.props.path.length * 30;
    return(
      <div className="folder" style={{marginLeft: marginOffset + 'px'}}>
        <div onClick={this.props.handleClick.bind(this, this.props)}>{this.props.name}</div>
        <div className="childList">{this.props.children}</div>
      </div>
    )
  }
}

export default Folder;
