import React from 'react'
import { Line } from 'react-chartjs-2'
import { ChartProps } from '../docs/Interface';
import {applyFilters, uniqueArray} from '../docs/Functions'

export default class Chart extends React.Component<ChartProps, { data: {}, options: {} }> {

    public static defaultProps = {
        providers: ['CBOE', 'BNDES', 'ABCDE'],
        lineColors: ['#912658', '#979031', '#6cdde7']
    }

    render() {
        const data = {
            labels: uniqueArray(this.props.chartData, 'date', [{ key: 'date', value: this.props.maxDate, comparison: '<' },{ key: 'date', value: this.props.minDate, comparison: '>' },{ key: 'pair', value: this.props.pair, comparison: '===' }]),
            fontColor: "#fefefe",
            datasets: this.props.providers.map(provider => (
                {
                    label: provider,
                    data: applyFilters(this.props.chartData, [{ key: 'date', value: this.props.maxDate, comparison: '<' },{ key: 'date', value: this.props.minDate, comparison: '>' },{ key: 'pair', value: this.props.pair, comparison: '===' }, { key: 'provider', value: provider, comparison: '===' }]).map(value => value.price),
                    fill: false,
                    lineTension: 0.075,
                    borderWidth: 2,
                    borderColor: this.props.lineColors[this.props.providers.indexOf(provider)],
                    fontColor: "#fefefe",
                    borderDash: this.props.providers.indexOf(provider) === 1 ? [5, 3] : [0, 0]
                }
            ))
        }
        const options = {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: this.props.chartTitle,
                fontColor: "#fefefe",
                fontSize: 20
            },

            elements: {
                point: {
                    radius: 0
                }
            },
            legend: {
                display: true,
                position: 'right',
                labels: {
                    fontColor: '#fefefe',
                    fontSize: 10,
                    boxWidth: 10
                },
            },
            scales: {
                yAxes: [{
                    gridLines: { color: "rgba(255,255,255,0.1)" },
                    ticks: {
                        maxTicksLimit: 6,
                        padding: 10,
                        fontColor: '#fefefe',
                        fontSize: 10
                    },
                }],
                xAxes: [{
                    gridLines: { color: "rgba(255,255,255,0.1)" },
                    ticks: {
                        maxTicksLimit: 8,
                        padding: 15,
                        fontColor: '#fefefe',
                        fontSize: 10
                    },
                }]
            }
        }

        return (
            <div className="chart-container">
                <Line data={data} options={options} />
            </div>
        )
    }
}