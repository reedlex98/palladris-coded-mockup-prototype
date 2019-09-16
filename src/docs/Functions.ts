import { datasetRow } from "./Interface";

const applyFilters = (arr: datasetRow[], filter: { key: string, value: any, comparison: string }[]) => 
     filter.reduce((acc, cur) => acc.filter(row => cur.value === 'All' ? true : cur.comparison === 'in' ? cur.value.indexOf(row[cur.key]) > -1 : cur.comparison === '===' ? row[cur.key] === cur.value : cur.comparison === ">" ? row[cur.key] > cur.value : row[cur.key] < cur.value), arr)


const twoZeroesFormat = (timeValue: number) => timeValue > 9 ? timeValue : `0${timeValue}`

const displayDatetime = (date: Date) => `${twoZeroesFormat(date.getHours())}:${twoZeroesFormat(date.getMinutes())}:${twoZeroesFormat(date.getSeconds())}`


const uniqueArray = (arr: datasetRow[], propToBeShown: string, filter?: { key: string, value: any, comparison: string }[]) => {
    if (filter) {
        arr = applyFilters(arr, filter)
    }
    return propToBeShown === 'date' ? [...new Set(arr.map(row => row[propToBeShown].toString()))].map(value => new Date(value)).sort((a, b) => (a as any) - (b as any)).map(value => displayDatetime(value)) : [...new Set(arr.map(row => row[propToBeShown]))]
}


const maxDateFromArray = (dates: Date[]) => dates.reduce((a, b) => a > b ? a : b)

const minDateFromArray = (dates: Date[]) => dates.reduce((a, b) => a < b ? a : b)

export {
    applyFilters,
    twoZeroesFormat,
    displayDatetime,
    uniqueArray,
    maxDateFromArray,
    minDateFromArray
}
