import React, { FormEvent } from 'react'
import TagsInputField from './TagsInputField'
import Chart from './Chart';
import Pair from './Pair';
import Datepicker from './Datepicker';
import { MarketDataProps, MarketDataState } from '../docs/Interface';
import { maxDateFromArray, minDateFromArray, uniqueArray } from '../docs/Functions'
export default class MarketData extends React.Component<MarketDataProps, MarketDataState>{
  
  constructor(props: MarketDataProps){
    super(props)
    this.state={
      maxDate: maxDateFromArray( this.props.dataArray.map(row => row.date)),
      minDate: minDateFromArray( this.props.dataArray.map(row => row.date)),
      pair: 'All',
      providers: uniqueArray(this.props.dataArray, 'provider') as string[]
    }
  }
  
  handleDateChange = (date: Date, field: string) => {
    this.setState({
      [field]: date
    } as any)
  }

  handleChange = (e: FormEvent<HTMLElement>) => {
    const { name, value } = e.target as HTMLInputElement
    this.setState({
      [name]: value
    } as any)
  }

  handleChangeProviders = (providers: string[]) => {
    this.setState({ providers })
  }

  render(){
    return <React.Fragment>
    <form className="market-data-form">
      <TagsInputField fieldData={this.state.providers} handleChangeTags={this.handleChangeProviders} title="Provider"/>

      <Pair pairsAvailable={[...new Set(this.props.dataArray.map(row => row.pair)), 'All']} handleChange={this.handleChange} />

      <Datepicker title="Start" handleChange={this.handleDateChange} name={'minDate'} dateValue={this.state.minDate} minDate={this.state.minDate} maxDate={this.state.maxDate}/>

      <Datepicker title="End" handleChange={this.handleDateChange} name={'maxDate'} dateValue={this.state.maxDate} minDate={this.state.minDate} maxDate={this.state.maxDate} />

    </form>
    <Chart minDate={this.state.minDate} maxDate={this.state.maxDate} chartData={this.props.dataArray} pair={this.state.pair} providers={this.state.providers} chartTitle="Price vs Time" />

  </React.Fragment>}
}