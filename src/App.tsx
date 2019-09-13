import React, { FormEvent } from 'react';
import Header from './components/Header';
import Provider from './components/Provider'
import GroupButton from './components/GroupButton'
import { Container, Box } from 'bloomer'
import Chart from './components/Chart';
import Pair from './components/Pair';
import Datepicker from './components/Datepicker';

class App extends React.Component<{}, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      dataArray: [],
      isFetching: true,
      activeSection: 'marketData',
      providers: [],
      pair: '',
      maxDefaultDate: new Date(),
      minDefaultDate: new Date(),
      maxSearchDate: new Date(),
      minSearchDate: new Date()
    }
  }

  handleDateChange = (date: Date, field: string) => {
    console.log(this.state.minSearchDate)
    this.setState({
      [field]:date
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
            isFetching: !previous.isFetching,
            maxDefaultDate: this.maxDateFromArray(dataArray.map(row => row.date)),
            minDefaultDate: this.minDateFromArray(dataArray.map(row => row.date))
          };
        });
      });
  }

  render() {
    // if(!this.state.isFetching){
    // console.log(this.minDateFromArray(this.state.dates))
    // console.log(this.maxDateFromArray(this.state.dates))}
    // return <Datepicker></Datepicker>
    return (
      <div>
        <Header />
        <Container className="app-container">
          <GroupButton activeSection={this.state.activeSection} handleNavigation={this.handleNavigation} />
          <Box className="market-container">
            {this.state.isFetching
              ? 'Loading data...'
              : <React.Fragment>
                <form className="market-data-form">
                  <Provider providers={this.state.providers} handleChangeProviders={this.handleChangeProviders} />

                  <Pair pairsAvailable={[...new Set(this.state.dataArray.map(row => row.pair)), 'All']} handleChange={this.handleChange} />

                  <Datepicker title="Start" handleChange={this.handleDateChange} name={'minDefaultDate'} dateValue={this.state.minDefaultDate} minDate={this.state.minDefaultDate} maxDate={this.state.maxDefaultDate}/>

                  <Datepicker title="End" handleChange={this.handleDateChange} name={'maxDefaultDate'} dateValue={this.state.maxDefaultDate} minDate={this.state.minDefaultDate} maxDate={this.state.maxDefaultDate} />

                </form>
                <Chart minDate={this.state.minDefaultDate} maxDate={this.state.maxDefaultDate} chartData={this.state.dataArray} pair={this.state.pair || "All"} providers={this.state.providers} chartTitle="Price vs Time" />

              </React.Fragment>
            }
          </Box>
        </Container>
      </div>
    );
  }
}

export default App;
