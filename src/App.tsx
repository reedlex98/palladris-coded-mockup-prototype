import React from 'react';
import Header from './components/Header';
import GroupButton from './components/GroupButton'
import { Container, Box } from 'bloomer'
import Chart from './components/Chart';

class App extends React.Component<{}, {dataArray: datasetRow[], isFetching: boolean}> {

  constructor(props : {}) {
    super(props);
    this.state = {
      dataArray: [],
      isFetching: true
    }
  }

  componentDidMount() {
    const dataArray : datasetRow[] = [];
    fetch("/dataset.csv")
      .then(response => response.text())
      .then(data => {
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
          <GroupButton hoveredId={0} />
          <Box className="market-container">
            <Chart chartData={this.state.dataArray} chartTitle="Price vs Time"/>
          </Box>
        </Container>
      </div>
    );
  }
}

export default App;
