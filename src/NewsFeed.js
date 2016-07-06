import React from 'react';
import NewsItem from './NewsItem';

class NewsFeed extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "Loading...",
      newsItems: []
    };
  }

  loadNews() {
    
  }

  renderNewsItem(item, index) {
    return (
      <NewsItem
        key={index}
        title={item.title}
        image={item.image}
        abstract={item.abstract}
        url={item/url} />
    );
  }

  // Visible Code
  // -----------------
  render() {
    let title = this.state.title;
    let newsItems = this.state.newsItems;

    return(
      <div>
        <h1>{title}</h1>

        <div>
          {newsItems.map(this.renderNewsItem.bind(this))}
        </div>
      </div>
    );
  }
}

export default NewsFeed;
