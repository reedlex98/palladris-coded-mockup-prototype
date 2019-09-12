declare type datasetRow = {
    provider: string
    pair: string
    date: string
    price: number
    qtd: number
}
declare interface ChartProps {
    chartData: datasetRow[]
    providers: string[]
    pair: string
    lineColors: string[]
    chartTitle: string
}
