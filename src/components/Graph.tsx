import React from 'react'
import * as d3 from 'd3'

type GraphState = {
    provider: string,
    pair: string,
}
type GraphProps = {
    margin: {
        top: number,
        bottom: number,
        left: number,
        right: number
    },
    width: number,
    height: number,
    provider: string,
    pair: string
}

type CSVData = "date" | "pair" | "price" | "provider" | "qtd";

class Graph extends React.Component<GraphProps, GraphState>{
    graphContainer = React.createRef<HTMLDivElement>()

    constructor(props: GraphProps) {
        super(props)
    }

    componentDidMount() {
        
    }

    render() {
        return <div ref="graphContainer" />
    }
}

export default Graph