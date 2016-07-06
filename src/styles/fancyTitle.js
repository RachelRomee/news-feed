import React from 'react';

const FancyTitleBaseStyle ={
  fontFamily: 'Roboto sans-serif',
  fontWeight: 'bolder',
  fontSize: '4rem'
};

class FancyTitle extends React.Component {
  render() {
    return (
      <h1 style={FancyTitleBaseStyle}>
        {this.props.label}
      </h1>
    );
  }
}

export default FancyTitle;
