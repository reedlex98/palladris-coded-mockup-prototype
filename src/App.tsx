import React, { FormEvent } from 'react';
import Header from './components/Header';
import Provider from './components/Provider'
import GroupButton from './components/GroupButton'
import { Container, Box } from 'bloomer'
import Chart from './components/Chart';
import Pair from './components/Pair';

class App extends React.Component<{}, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      dataArray: [],
      isFetching: true,
      activeSection: 'marketData',
      providers: [],
      pair: '' 
    }
  }
  handleChange = (e : FormEvent<HTMLElement>) => {
    const {name, value} = e.target as any
    this.setState({
      [name]:value
    } as any)
  }

  handleChangeProviders = (providers : string[]) => {
    this.setState(prevState => ({providers}))
  }

  handleNavigation = (e : React.MouseEvent<HTMLButtonElement>) => {
    const {name} = e.target as HTMLButtonElement
    this.setState(prevState => ({activeSection: name}))
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
            date: columns[2],
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
        <Container className="app-container">
          <GroupButton activeSection={this.state.activeSection} handleNavigation={this.handleNavigation} />
          <Box className="market-container">
            <form className="market-data-form">
              <Provider providers={this.state.providers} handleChangeProviders={this.handleChangeProviders}/>
              <Pair pairsAvailable={[...new Set(this.state.dataArray.map(row => row.pair)), 'All']} handleChange={this.handleChange}/>
            </form>
            <Chart chartData={this.state.dataArray} pair={this.state.pair || "All"} providers={this.state.providers} chartTitle="Price vs Time" />
          </Box>
        </Container>
      </div>
    );
  }
}

export default App;
