import React from 'react';
import { row, col } from './styles/grid';
import { responsiveWidth } from './styles/containers';

class NewsItem extends React.Component {
  render () {
    // to check in console what the other props are
    console.log(this.props);

    return (
      <div style={row}>
        <div style={col(4)}>
          <img src={this.props.image} style={responsiveWidth}/>
        </div>

        <div style={col(8)}>
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <p>
            <a href={this.props.link}>Read more</a>
          </p>
        </div>
      </div>
    );
  }
}

export default NewsItem;
