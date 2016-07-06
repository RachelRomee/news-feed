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
        return (
            <MuiThemeProvider>
              <NewsFeed url={feedUrl} />
            </MuiThemeProvider>
        );
    }
}

export default App;
