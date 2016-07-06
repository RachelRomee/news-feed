import React from 'react';

class NewsItem extends React.Component {
  render () {
    // to check in console what the other props are
    console.log(this.props);

    return (
      <div>
        <div>
          <img src={this.props.image} />
        </div>

        <div>
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
