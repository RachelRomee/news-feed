import React from 'react';

class NewsItem extends React.Component {
  render () {
    console.log(this.props);

    return (
      <h2>NewsItem</h2>
    );
  }
}

export default NewsItem;
