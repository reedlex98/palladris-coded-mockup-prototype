import React from 'react'
import Provider from './Provider'
import Chart from './Chart';
import Pair from './Pair';
import Datepicker from './Datepicker';

export default function MarketData(props: {appState: AppState, handleChangeProviders: Function,handleDateChange: Function, handleChange: Function }){
    return <React.Fragment>
    <form className="market-data-form">
      <Provider providers={props.appState.providers} handleChangeProviders={props.handleChangeProviders} />

      <Pair pairsAvailable={[...new Set(props.appState.dataArray.map(row => row.pair)), 'All']} handleChange={props.handleChange} />

      <Datepicker title="Start" handleChange={props.handleDateChange} name={'minDefaultDate'} dateValue={props.appState.minDefaultDate} minDate={props.appState.minDefaultDate} maxDate={props.appState.maxDefaultDate}/>

      <Datepicker title="End" handleChange={props.handleDateChange} name={'maxDefaultDate'} dateValue={props.appState.maxDefaultDate} minDate={props.appState.minDefaultDate} maxDate={props.appState.maxDefaultDate} />

    </form>
    <Chart minDate={props.appState.minDefaultDate} maxDate={props.appState.maxDefaultDate} chartData={props.appState.dataArray} pair={props.appState.pair || "All"} providers={props.appState.providers} chartTitle="Price vs Time" />

  </React.Fragment>
}