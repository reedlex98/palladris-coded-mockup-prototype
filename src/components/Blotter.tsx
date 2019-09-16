import React, { FormEvent } from 'react'
import BlotterTable from './BlotterTable'
import Filter from './Filter'
import {BlotterProps, BlotterState } from '../docs/Interface';
import { maxDateFromArray, minDateFromArray } from '../docs/Functions';

export default class Blotter extends React.Component<BlotterProps, BlotterState> {
    constructor(props: BlotterProps) {
        super(props)
        this.state = {
            pairs: [],
            maxDate: maxDateFromArray(this.props.dataArray.map(row => row.date)),
            minDate: minDateFromArray(this.props.dataArray.map(row => row.date)),
            minPrice: 0,
            maxPrice: 0,
            minQty: 0,
            maxQty: 0,
            isFilterCollapsed: true
        }
    }

    handleCollapse = () => {
        this.setState((prevState: BlotterState) => ({
            isFilterCollapsed: !prevState.isFilterCollapsed
        }))
    }

    handleChange = (e: FormEvent<HTMLElement>) => {
        const { name, value } = e.target as HTMLInputElement
        this.setState({
            [name]: value
        } as any)
    }

    handleChangeDate = (date: Date, field: string) => {
        this.setState({
            [field]: date
        } as any)
    }

    handleChangePairs = (pairs: string[]) => {
        this.setState({ pairs })
    }

    render() {
        return (
            <React.Fragment>
                <Filter functions={{ handleChange:this.handleChange, handleChangeTags:this.handleChangePairs, handleChangeDate:this.handleChangeDate, handleCollapse: this.handleCollapse}} 
                blotterState={this.state}/>
                <BlotterTable blotterState={this.state} dataArray={this.props.dataArray} 
                 />
            </React.Fragment>
        )
    }
}