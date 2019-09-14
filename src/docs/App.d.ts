

// declare interface PageSections {
//     marketData: boolean,
//     blotter: boolean
// }
declare module 'react-tagsinput'
declare module 'react-datepicker'

declare interface AppState {
    dataHeader: string[],
    dataArray: datasetRow[],
    isFetching: boolean,
    activeSection: string,
    providers: string[],
    pair: string,
    minDefaultDate : Date ,
    maxDefaultDate : Date 
}

declare interface GroupButtonProps {
    activeSection: string
    handleNavigation: React.MouseEventHandler
}