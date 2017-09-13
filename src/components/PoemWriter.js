import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: false
    };
  }

  handleChange = (event) => {
    this.setState({
      poem: event.target.value,
      isValid: this.isValid(event.target.value)
    })
  }

  isValid = (poem) => {
      if(poem.length === 0) return false;
      const lines = poem.split("\n");
      const wordCount = lines.map((l) => l.trim().split(' ').length) 
    
      return (lines.length === 3 && 
        wordCount[0] === 5 && 
        wordCount[1] === 3 &&
        wordCount[2] === 5) ? true : false
  }

  render() {
    return (
      <div>
        <textarea 
          value={this.state.poem}
          onChange={this.handleChange}
          rows="3" 
          cols="60" 
        />
        {!this.state.isValid ?
        <div 
          id="poem-validation-error" 
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div> : null }
      </div>
    );
  }
}

export default PoemWriter;