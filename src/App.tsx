import React, { FormEvent } from 'react';
import Header from './components/Header';
import GroupButton from './components/GroupButton'
import Blotter from './components/Blotter';
import MarketData from './components/MarketData'
import { Container, Box } from 'bloomer'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { AppState, datasetRow } from './docs/Interface';

class App extends React.Component<{}, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      dataArray: [],
      isFetching: true,
      activeSection: window.location.pathname.replace('/','')
    }
  }

  handleNavigation = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement
    this.setState({ activeSection: name })
  }
  componentDidMount() {
    fetch("/dataset.csv")
      .then(response => response.text())
      .then(data => {
        const dataArray: datasetRow[] = [];
        const table = data.split("\n").slice(1);
        table.forEach(row => {
          const columns = row.split(",");
          dataArray.push({
            provider: columns[0],
            pair: columns[1],
            date: new Date(columns[2]),
            price: +columns[3],
            qtd: +columns[4]
          });
        });
        this.setState((previous) => {
          return {
            dataArray,
            isFetching: !previous.isFetching
          };
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Container className="page-container">
          <Router>
            <GroupButton activeSection={this.state.activeSection} handleNavigation={this.handleNavigation} />
            <Box className="app-container">
              <Route exact path="/" render={props => <MarketData {...props} dataArray={this.state.dataArray}/>} />
              <Route path="/blotter" render={props => <Blotter {...props} appState={this.state} />} />
            </Box>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
