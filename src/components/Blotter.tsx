import React from 'react'
import BlotterTable from './BlotterTable'
import { BlotterTableProps } from '../docs/Interface';

export default function Blotter(props: BlotterTableProps) {
    return (
        <React.Fragment>
            <BlotterTable dataArray={props.appState.dataArray}/>
        </React.Fragment>
    )
}