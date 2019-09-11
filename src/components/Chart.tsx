import React from 'react'
import { Line } from 'react-chartjs-2'

export default class Chart extends React.Component<ChartProps, {}> {
    public static defaultProps = {
        providers: ['CBOE', 'BNDES', 'ABCDE'],
        lineColors: ['#912658', '#979031', '#6cdde7']
    }
    render() {
        let graph = null
        if (this.props.chartData.length > 0) {
            graph = <Line
                data={{
                    labels: [...new Set(this.props.chartData.map(row => row.date.split('T')[1]))],
                    fontColor: "#fefefe",
                    datasets: this.props.providers.map(provider => ({
                        label: provider,
                        data: this.props.chartData.filter(row => row.provider === provider).map(row => row.price),
                        fill: false,
                        lineTension: 0.1,
                        borderWidth: 2,
                        borderColor: this.props.lineColors[this.props.providers.indexOf(provider)],
                        fontColor: "#fefefe",
                        borderDash: this.props.providers.indexOf(provider) === 1 ? [5,3] : [0,0]
                    }))
                }}
                options={{
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
                        labels: { fontColor: '#fefefe' ,
                        fontSize: 10,
                        boxWidth: 10},
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {color: "rgba(255,255,255,0.1)"},
                            ticks: {
                                maxTicksLimit: 6,
                                padding:10,
                                fontColor: '#fefefe',
                                fontSize: 10
                            },
                        }],
                        xAxes: [{
                            gridLines: {color: "rgba(255,255,255,0.1)"},
                            ticks: {
                                maxTicksLimit: 8,
                                padding:15,
                                fontColor: '#fefefe',
                                fontSize: 10
                            },
                        }]
                    } 
                }}
            />
        }
        return (<div className="graph-container">
            {graph || "Loading data..."}
        </div>)
    }
}