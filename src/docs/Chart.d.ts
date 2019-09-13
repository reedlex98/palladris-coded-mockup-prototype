declare interface datasetRow {
    provider: string
    pair: string
    date: Date
    price: number
    qtd: number
    [key:string] : string | number | Date
}
declare interface ChartProps {
    chartData: datasetRow[]
    providers: string[]
    pair: string
    lineColors: string[]
    chartTitle: string
    maxDate: Date,
    minDate: Date
}
