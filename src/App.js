import React from 'react';
// from material ui
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// internal
import NewsFeed from './NewsFeed';

injectTapEventPlugin();

const feedUrl = "http://thenextweb.com/feed/";

class App extends React.Component {
  render() {
    // for with the route to category, see app.js and index.js
    // alert(this.props.params.category);
    // var entries = this.state.feed.entries;

    // debugging way for console
    // if(entries.length > 0) {
    //   debugger
    // }
    return (
        <MuiThemeProvider>
          <NewsFeed url={feedUrl} category={this.props.params.category}/>
        </MuiThemeProvider>
    );
  }
}

export default App;
