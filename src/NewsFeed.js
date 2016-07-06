import React from 'react';
import $ from 'jquery';
import _ from 'lodash';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import NewsItem from './NewsItem';
import FancyTitle from './styles/FancyTitle';

class NewsFeed extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "Loading...",
      newsItems: [],
      // for the loader, whole loading the news item
      loading: true
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
           newsItems: xml.responseData.feed.entries,
           loading: false
         });
       }
     });
  }

  renderNewsItem(item, index) {
    // use jQuery to select the image src from the content element in the xml file. Returns an array with image at index 0
    var content = $("<div/>").html(item.content);
    var image = $("img", content).attr("src");
    // console.log($content);
    // console.log(img);

    // on left side (description) for use in react, item.contentSnippet is from the feed file
    return (
      <NewsItem
        key={index}
        item={item}
        image={image}
        link={item.link} />
    );
  }

  // Visible Code
  // -----------------
  renderList() {
    let title = this.state.title;
    let newsItems = this.state.newsItems;
    // needs to be defined for filter to show posts of category on one page, because otherwise 'this' is not the same
    let category = this.props.category;

    // if statement so it won't break when an item doesn't have a category, category because empty string is false
    if(category){
      newsItems = _.filter(newsItems, function(item) {
        return _.includes(item.categories, category);
      });
    }

    return(
      <div>
        <FancyTitle label={title} />

        <div>
          {newsItems.map(this.renderNewsItem.bind(this))}
        </div>
      </div>
    );
  }


  // material ui loader (also need to include!)
  renderLoading() {
    return(
      <RefreshIndicator
        top={100}
        left={window.innerWidth / 2 - 50}
        size={100}
        loadingColor={"#FF9800"}
        status="loading" />
    );
  }

  render() {
    if (this.state.loading){
      return this.renderLoading();
    }

    return this.renderList();
  }
}

export default NewsFeed;
