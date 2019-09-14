import React, { FormEvent } from 'react';
import Header from './components/Header';
import GroupButton from './components/GroupButton'
import Blotter from './components/Blotter';
import MarketData from './components/MarketData'
import { Container, Box } from 'bloomer'
import { Route, BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component<{}, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      dataHeader: [],
      dataArray: [],
      isFetching: true,
      activeSection: 'marketData',
      providers: [],
      pair: '',
      maxDefaultDate: new Date(),
      minDefaultDate: new Date()
    }
  }

  handleDateChange = (date: Date, field: string) => {
    this.setState({
      [field]: date
    } as any)
  }

  handleChange = (e: FormEvent<HTMLElement>) => {
    const { name, value } = e.target as any
    this.setState({
      [name]: value
    } as any)
  }

  handleChangeProviders = (providers: string[]) => {
    this.setState({ providers })
  }

  handleNavigation = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement
    this.setState({ activeSection: name })
  }

  maxDateFromArray = (dates: Date[]) => dates.reduce((a, b) => a > b ? a : b)

  minDateFromArray = (dates: Date[]) => dates.reduce((a, b) => a < b ? a : b)

  componentDidMount() {
    fetch("/dataset.csv")
      .then(response => response.text())
      .then(data => {
        const dataArray: datasetRow[] = [];
        const dataHeader = data.split("\n")[0].split(',');
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
            dataHeader,
            dataArray,
            isFetching: !previous.isFetching,
            maxDefaultDate: this.maxDateFromArray(dataArray.map(row => row.date)),
            minDefaultDate: this.minDateFromArray(dataArray.map(row => row.date))
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
              <Route exact path="/" render={props => <MarketData {...props} appState={this.state} handleChange={this.handleChange} handleChangeProviders={this.handleChangeProviders} handleDateChange={this.handleDateChange} />} />
              <Route path="/blotter" render={props => <Blotter {...props} appState={this.state} />} />
            </Box>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
