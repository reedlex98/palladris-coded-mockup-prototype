import React from 'react'
import TagsInputField from './TagsInputField';
import Chart from './Chart';
import { Button, Table } from 'bloomer';
import { Link } from 'react-router-dom';
import { TradeInfoProps, TradeInfoState } from '../docs/Interface';
import { uniqueArray } from '../docs/Functions';

export default class TradeInfo extends React.Component<TradeInfoProps, TradeInfoState>{
    constructor(props: TradeInfoProps) {
        super(props)
        this.state = {
            providers:  uniqueArray(this.props.location.state.dataset, 'provider') as string[]
        }
    }

    handleChangeProviders = (providers: string[]) => {
        this.setState({ providers })
    }


    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="title" >
                        <h1>Your Blotter</h1>
                        <span>Trade Info</span>
                    </div>
                    <form className="market-data-form">
                        <TagsInputField fieldData={this.state.providers} handleChangeTags={this.handleChangeProviders} title="Providers" />
                        <Link to="/blotter">
                            <Button isColor='light' onClick={() => this.props.displayToggler()}>Return</Button>
                        </Link>
                    </form>
                    <Table className="blotter-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Pair</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.props.location.state.date.toISOString().replace(/[TZ]/ig, ' ').replace(/-/g, '/')}</td>
                                <td>{this.props.location.state.pair}</td>
                                <td>{this.props.location.state.price}</td>
                                <td>{this.props.location.state.qtd}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <Chart chartData={this.props.location.state.dataset} chartTitle='' maxDate={this.props.location.state.maxDate} minDate={this.props.location.state.minDate} providers={this.state.providers} pair={this.props.location.state.pair} />
            </React.Fragment>
        )
    }
}