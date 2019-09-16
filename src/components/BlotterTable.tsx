import React from 'react'
import {Table} from 'bloomer'
import { BlotterProps } from '../docs/Interface';
const BlotterTable = (props: BlotterProps) => {
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
                {props.dataArray.map((row, index) => 
                    <tr key={index}>
                        <td>{row.date.toISOString().replace(/[TZ]/ig, ' ').replace(/-/g,'/')}</td>
                        <td>{row.pair}</td>
                        <td>{row.price}</td>
                        <td>{row.qtd}</td>
                        {/* <td>{row.provider}</td> */}
                    </tr>)
                }
            </tbody>
        </Table>
    )
}

export default BlotterTable