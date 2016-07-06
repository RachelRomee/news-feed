import React from 'react';
// Code to make your own styling:
// import { row, col } from './styles/grid';
// import { responsiveWidth } from './styles/containers';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class NewsItem extends React.Component {
  render () {
    // to check in console what the other props are
    console.log(this.props);

    return (
      // Card is imported above (along with other components)
      <Card>
        <CardHeader
          title={this.props.item.author} />
        <CardMedia
          overlay={<CardTitle title={this.props.item.title} subtitle={this.props.item.categories.join(",")} />}
          >
          <img src={this.props.image}/>
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
          <p>{this.props.item.contentSnippet}</p>
        </CardText>
        <CardActions>
          <a href={this.props.link}>Read more</a>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    );
  }
}

export default NewsItem;
