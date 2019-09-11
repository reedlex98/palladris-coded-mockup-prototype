import React from 'react'
import { Button } from 'bloomer'

const GroupButton = ( props : GroupButtonProps) => {
    return <div style={{alignSelf: "center"}}>
        <Button id="marketDataButton" name="marketData" isSize="small" onClick={props.handleNavigation} isColor="white" isHovered={props.activeSection === "marketData"} isOutlined>Market Data</Button>
        <Button id="blotterButton" name="blotter" isSize="small" onClick={props.handleNavigation} isColor="white" isHovered={props.activeSection === "blotter"} isOutlined>Blotter</Button>
    </div>
}

export default GroupButton