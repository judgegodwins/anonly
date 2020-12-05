import React from 'react';
import Button from 'Components/Button'

// import 'Styles/utilities'

class InkWell extends Button {

  constructor(props) {
    super(props)
    // super.handleClick = super.handleClick.bind(this)

    this.state = {
      ripple: false
    }

  }
  render() {
    const { ripple } = this.state;
    const { right, left, style } = this.props;

    return (
      <div 
        className="inkwell" 
        onClick={this.handleClick}
        style={{
          right: right ? '-10px' : 'unset',
          left: left ? '-10px' : 'unset',
          ...style
        }}
      >
        {
          ripple &&
          <span
            ref={this.rippleSpan}
            className="ripple"
            style={ripple}
          ></span>
        }
        {this.props.children}
      </div>
    )
  }
}

export default InkWell;