import React from 'react'
import {Table} from 'bloomer'
import { BlotterTableProps } from '../docs/Interface';
import chartIcon from '../assets/line-chart.svg';
import {applyFilters} from '../docs/Functions'
import { Link } from 'react-router-dom';

const BlotterTable = (props: BlotterTableProps) => {
    const { maxDate, minDate, minPrice, maxPrice, maxQty, minQty, pairs } = props.blotterState

    return (
        <Table className='blotter-table'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Pair</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Market Data Link</th>
                </tr>
            </thead>
            <tbody>
                {
                    applyFilters(props.dataArray,[{key: "pair", comparison: "in", value: pairs},{key: "price", comparison: ">", value: minPrice},{key: "price", comparison: "<", value: maxPrice},{key: "date", comparison: ">", value: minDate}, {key: "date", comparison: "<", value: maxDate},{key: "qtd", comparison: ">", value: minQty},{key: "qtd", comparison: "<", value: maxQty}]).map( (row, index) => (
                    <tr key={index}>
                        <td>{row.date.toISOString().replace(/[TZ]/ig, ' ').replace(/-/g,'/')}</td>
                        <td>{row.pair}</td>
                        <td>{row.price}</td>
                        <td>{row.qtd}</td>
                        <td onClick={() => props.displayToggler()}> <Link to={{pathname:"/blotter/yourBlotter",state: {date:row.date, pair: row.pair, price: row.price, qtd: row.qtd, dataset: props.dataArray, minDate, maxDate}}}><img src={chartIcon} alt="chart icon"/></Link></td>
                    </tr>))
                }
            </tbody>
        </Table>
    )
}

export default BlotterTable