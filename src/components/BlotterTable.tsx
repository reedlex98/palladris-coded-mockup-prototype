import React from 'react'
import {Table} from 'bloomer'
import { BlotterTableProps } from '../docs/Interface';
import chartIcon from '../assets/line-chart.svg';
import {applyFilters} from '../docs/Functions'

const BlotterTable = (props: BlotterTableProps) => {
    const { maxDate, minDate, minPrice, maxPrice, pairs } = props.blotterState

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
                    applyFilters(props.dataArray,[{key: "pair", comparison: "in", value: pairs},{key: "price", comparison: ">", value: minPrice},{key: "price", comparison: "<", value: maxPrice},{key: "date", comparison: ">", value: minDate}, {key: "date", comparison: "<", value: maxDate}]).map( (row, index) => (
                    <tr key={index}>
                        <td>{row.date.toISOString().replace(/[TZ]/ig, ' ').replace(/-/g,'/')}</td>
                        <td>{row.pair}</td>
                        <td>{row.price}</td>
                        <td>{row.qtd}</td>
                        {/* <td>{row.provider}</td> */}
                    </tr>))
                }
            </tbody>
        </Table>
    )
}

export default BlotterTable