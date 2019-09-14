import React from 'react'
import { Button } from 'bloomer'
import { Link } from 'react-router-dom'

const GroupButton = ( props : GroupButtonProps) => {
    return <div>
        <Link to='/'>
            <Button id="marketDataButton" name="marketData" isSize="small" onClick={props.handleNavigation} isColor="white" isHovered={props.activeSection === "marketData"} isOutlined>Market Data</Button>
        </Link>
        <Link to='/blotter'>
            <Button id="blotterButton" name="blotter" isSize="small" onClick={props.handleNavigation} isColor="white" isHovered={props.activeSection === "blotter"} isOutlined>Blotter</Button>
        </Link>
    </div>
}

export default GroupButton