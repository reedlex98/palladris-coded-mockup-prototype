import { FormEvent } from "react";

export interface datasetRow {
    provider: string
    pair: string
    date: Date
    price: number
    qtd: number
    [key: string]: string | number | Date
}

export interface AppState {
    dataArray: datasetRow[],
    isFetching: boolean,
    activeSection: string
}

export interface MarketDataState { providers: string[], pair: string, maxDate: Date, minDate: Date }

export interface ChartProps {
    chartData: datasetRow[]
    providers: string[]
    pair: string
    lineColors: string[]
    chartTitle: string
    maxDate: Date,
    minDate: Date
}

export interface PairProps {
    pairsAvailable: string[],
    handleChange: (event: FormEvent<HTMLElement>) => void
}

export interface TagsInputFieldProps {
    fieldData: string[],
    title: string,
    handleChangeTags: Function
}

export interface DatepickerProps {
    title: string,
    name: string,
    dateValue: Date,
    handleChange: Function,
    minDate: Date,
    maxDate: Date
}
export interface FilterProps{
    functions: {
        handleChange: (event: FormEvent<HTMLElement>) => void,
        handleChangeTags: Function,
        handleChangeDate: Function,
        handleCollapse: Function
    }
    blotterState: BlotterState
}

export interface BlotterProps {
    dataArray: datasetRow[]
}
export interface BlotterState {
    pairs: string[],
    maxDate: Date,
    minDate: Date,
    minPrice: number,
    maxPrice: number,
    minQty: number,
    maxQty: number,
    isFilterCollapsed: boolean
}

export interface BlotterTableProps {
    dataArray: datasetRow[],
    blotterState: BlotterState
}

export interface GroupButtonProps {
    activeSection: string
    handleNavigation: React.MouseEventHandler
}

export interface MarketDataProps {
    dataArray: datasetRow[]
}
