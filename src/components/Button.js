import React, { Component } from 'react';

import 'Styles/button'

class Button extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }

    this.rippleSpan = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }


  componentDidUpdate() {
    if(this.state.ripple)
      setTimeout(() => {
        this.setState({
          ripple: false
        })
      }, 500)
  }

  handleClick(e) {

    console.log('target ', e.currentTarget);
    const button = e.currentTarget;

    // if(this.state.ripple) {
    //   this.setState({
    //     ripple: false
    //   })
    // }
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    console.log(button.clientHeight)
    const radius = diameter / 2;

    this.setState({
      ripple: {
        height: `${diameter}px`,
        width: `${diameter}px`,
        left: `${e.clientX - (button.offsetLeft + radius)}px`,
        top: `${e.clientY - (button.offsetTop + radius)}px`
      }
    })
  }

  render() {

    const { ripple } = this.state;
    const { color, style, fullWidth } = this.props;
    const defaultColour = '#224acf';

    return ( 
      <button
        onClick={this.handleClick}
        style={{
          background: color || defaultColour,
          width: fullWidth ? '100%' : 'unset',
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
      </button>
    )
  }

}

export default Button;