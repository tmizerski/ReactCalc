import { React, Component} from 'react';

class Button extends Component {
  // constructor() {
  //   super();
  //   this.specyfiType = ;
  // }

  handleSpecyfiType = (e) => {
    e.preventDefault();
    this.props.specyfiType(this.props.btnType, this.props.name);
    console.log(this.props.specyfiType)
  }

  render() { 
    return ( 
      <button data-type={this.props.btnType} className={this.props.btnType} onClick={this.handleSpecyfiType}>{this.props.name}</button>
     );
  }
}
 
export default Button;