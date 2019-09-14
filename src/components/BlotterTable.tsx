import React from 'react'
import {Table} from 'bloomer'
const BlotterTable = (props: {dataHeader: string[],dataArray: datasetRow[]}) => {
    return (
        <Table isBordered isNarrow>
            <thead>
                <tr>
                    {props.dataHeader.map((headerValue, index) => <th key={index}>{headerValue}</th> )}
                </tr>
            </thead>
            <tbody>
                {props.dataArray.map((row, index) => (
                    <tr key={index+6}>
                        <td key={index+1}>{row.provider}</td>
                        <td key={index+2}>{row.pair}</td>
                        <td key={index+3}>{row.date.toISOString()}</td>
                        <td key={index+4}>{row.price}</td>
                        <td key={index+5}>{row.qtd}</td>
                    </tr>)
                )}
            </tbody>
        </Table>
    )
}

export default BlotterTable