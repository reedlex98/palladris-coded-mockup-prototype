import React from 'react'
import BlotterTable from './BlotterTable'

export default function Blotter(props: {appState: AppState}) {
    return (
        <React.Fragment>
            <BlotterTable dataHeader={props.appState.dataHeader} dataArray={props.appState.dataArray}/>
        </React.Fragment>
    )
}