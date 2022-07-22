import { React, Component } from 'react';

class CalcHistory extends Component {
  state = {  }

  handleClearHistory = (e) => {
    e.preventDefault();
    this.props.clearHistory();
  }

  render() { 
    return ( 
      <div className='calcHistory'>
          <p className='historyTitle'>Calculator History</p>
          <button className='historyBtn' onClick={(e)=>this.handleClearHistory(e)}>Clear history</button>
          <hr/>
          <ul className='history'>
            {this.props.history ? this.props.history.map((historyItem, index) => (
              <li key={index}>{historyItem}</li>
            )) : null}
          </ul>
        </div>
     );
  }
}
 
export default CalcHistory;