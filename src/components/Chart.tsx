import React from 'react'
import { Line } from 'react-chartjs-2'

export default class Chart extends React.Component<ChartProps, { data: {}, options: {} }> {

    public static defaultProps = {
        providers: ['CBOE', 'BNDES', 'ABCDE'],
        lineColors: ['#912658', '#979031', '#6cdde7']
    }

    twoZeroesFormat = (timeValue: number) => timeValue > 9 ? timeValue : `0${timeValue}`

    displayDatetime = (date: Date) => `${this.twoZeroesFormat(date.getHours())}:${this.twoZeroesFormat(date.getMinutes())}:${this.twoZeroesFormat(date.getSeconds())}`

    applyFilters = (arr: datasetRow[], filter: { key: string, value: any, comparison: string }[]) => filter.reduce((acc, cur) => acc.filter(row => cur.value === 'All' ? true : cur.comparison === '===' ? row[cur.key] === cur.value : cur.comparison === ">" ? row[cur.key] > cur.value : row[cur.key] < cur.value), arr)

    uniqueArray = (arr: datasetRow[], propToBeShown: string, filter?: { key: string, value: any, comparison: string }[]) => {
        if (filter) {
            arr = this.applyFilters(arr, filter)
        }
        return propToBeShown === 'date' ? [...new Set(arr.map(row => row[propToBeShown].toString()))].map(value => new Date(value)).sort((a, b) => (a as any) - (b as any)).map(value => this.displayDatetime(value)) : [...new Set(arr.map(row => row[propToBeShown]))]
    }

    render() {

        const data = {
            labels: this.uniqueArray(this.props.chartData, 'date', [{ key: 'date', value: this.props.maxDate, comparison: '<' },{ key: 'date', value: this.props.minDate, comparison: '>' },{ key: 'pair', value: this.props.pair, comparison: '===' }]),
            fontColor: "#fefefe",
            datasets: this.props.providers.map(provider => (
                {
                    label: provider,
                    data: this.applyFilters(this.props.chartData, [{ key: 'date', value: this.props.maxDate, comparison: '<' },{ key: 'date', value: this.props.minDate, comparison: '>' },{ key: 'pair', value: this.props.pair, comparison: '===' }, { key: 'provider', value: provider, comparison: '===' }]).map(value => value.price),
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

        // console.log(this.props.providers.reduce( (acc, provider) => this.applyFilters(this.props.chartData, [{key: 'pair', value: this.props.pair, comparison: '===' }, {key: 'provider', value: provider, comparison: '==='}])))
        return (
            <div className="chart-container">
                <Line data={data} options={options} />
            </div>
        )
    }
}