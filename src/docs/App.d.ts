

// declare interface PageSections {
//     marketData: boolean,
//     blotter: boolean
// }
declare module 'react-tagsinput'

declare interface AppState {
    dataArray: datasetRow[],
    isFetching: boolean,
    activeSection: string,
    providers: string[],
    pair: string
}

declare interface GroupButtonProps {
    activeSection: string
    handleNavigation: React.MouseEventHandler
}