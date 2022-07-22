import { React, Component} from 'react';

class Button extends Component {
  state = {
    name: this.props.name,
    value: this.props.name,
    type: this.props.btnType
  }


  handleSpecyfiType = (e) => {
    e.preventDefault();
    this.props.specyfiType(this.state.type, this.state.name);
  }

  render() { 
    return ( 
      <button data-type={this.state.type} className={this.state.type} onClick={(e)=>this.handleSpecyfiType(e)}>{this.state.name}</button>
     );
  }
}
 
export default Button;