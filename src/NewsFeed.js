import React from 'react';
import $ from 'jquery';
import NewsItem from './NewsItem';

class NewsFeed extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "Loading...",
      newsItems: []
    };
  }

  componentDidMount() {
    this.loadNews();
  }

  loadNews() {
    let url = this.props.url;
    // because you can't use this.setState() directly you need to define before
    let component = this;

    // url: google api to transform xml to json
    $.ajax({
       type: "GET",
       url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(url),
       dataType: 'json',
       error: function(){
         console.log('Unable to load feed, Incorrect path or invalid feed');
       },
       success: function(xml){
         component.setState({
           title: xml.responseData.feed.title,
           newsItems: xml.responseData.feed.entries
         });
       }
     });
  }

  renderNewsItem(item, index) {
    console.log(item);

    return (
      <NewsItem
        key={index}
        title={item.title}
        image={item.image}
        abstract={item.abstract}
        link={item.link} />
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
