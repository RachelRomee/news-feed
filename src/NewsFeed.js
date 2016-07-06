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

    // use jQuery to select the image src from the content element in the xml file. Returns an array with image at index 0
    var content = $("<div/>").html(item.content);
    var image = $("img", content).attr("src");
    // console.log($content);
    // console.log(img);

    // on left side (description) for use in react, item.contentSnippet is from the feed file
    return (
      <NewsItem
        key={index}
        title={item.title}
        image={image}
        description={item.contentSnippet}
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
