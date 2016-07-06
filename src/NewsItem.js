import React from 'react';
// Code to make your own styling:
// import { row, col } from './styles/grid';
// import { responsiveWidth } from './styles/containers';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
// routes
import {Link} from 'react-router';


class NewsItem extends React.Component {
  render () {
    // to check in console what the other props are
    console.log(this.props);

    return (
      // Card is imported above (along with other components)
      <Card>
        <CardHeader
          title={this.props.item.author}
        />
        <CardMedia
          overlay={<CardTitle title={this.props.item.title} subtitle={this.props.item.categories.join(", ")} />}
        >
          <img src={this.props.image} />
        </CardMedia>
        <CardText dangerouslySetInnerHTML={{__html: this.props.item.contentSnippet}}>
        </CardText>
        <CardActions>
          <RaisedButton label="Read" primary={true} linkButton={true} href={this.props.link} />
          {this.props.item.categories.map((category) => {
            return (<Link to={`/${category}`}><FlatButton label={category} /></Link>);
          })}
        </CardActions>
      </Card>
    );
  }
}

export default NewsItem;
