import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remainingChars: this.props.maxChars,
      value: ''
    };
  }

  handleStateChange = (event) => {
    this.setState({
      value: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleStateChange} value={this.state.value} />
        <p>RemainingChars: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;