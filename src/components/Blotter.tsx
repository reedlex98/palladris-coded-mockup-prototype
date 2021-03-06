import React, { FormEvent } from 'react'
import BlotterTable from './BlotterTable'
import Filter from './Filter'
import { BlotterProps, BlotterState } from '../docs/Interface';
import { maxDateFromArray, minDateFromArray, uniqueArray } from '../docs/Functions';
import { Route } from 'react-router';
import TradeInfo from './TradeInfo';

export default class Blotter extends React.Component<BlotterProps, BlotterState> {
    constructor(props: BlotterProps) {
        super(props)
        this.state = {
            pairs: uniqueArray(this.props.dataArray, 'pair') as string[],
            maxDate: maxDateFromArray(this.props.dataArray.map(row => row.date)),
            minDate: minDateFromArray(this.props.dataArray.map(row => row.date)),
            minPrice: 0,
            maxPrice: Math.max(...this.props.dataArray.map(row => row.price)),
            minQty: 0,
            maxQty: Math.max(...this.props.dataArray.map(row => row.qtd)),
            isFilterCollapsed: true,
            toggleDisplay: true
        }
    }

    displayToggler = () => {
        this.setState(prevState => ({toggleDisplay: !prevState.toggleDisplay}))
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
                {
                    this.state.toggleDisplay 
                    ?
                    <React.Fragment>
                        <Filter functions={{ handleChange: this.handleChange, handleChangeTags: this.handleChangePairs, handleChangeDate: this.handleChangeDate, handleCollapse: this.handleCollapse }}
                            blotterState={this.state} />
                        <BlotterTable displayToggler={this.displayToggler} blotterState={this.state} dataArray={this.props.dataArray}
                        />
                    </React.Fragment>
                    : <Route exact path="/blotter/tradeInfo" render={props => <TradeInfo {...props} displayToggler={this.displayToggler} />}/>
                }
            </React.Fragment>   
        )
    }
}