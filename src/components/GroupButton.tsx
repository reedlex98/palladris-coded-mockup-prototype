import React from 'react'
import { Button } from 'bloomer'
import { Link } from 'react-router-dom'
import { GroupButtonProps } from '../docs/Interface';

const GroupButton = ( props : GroupButtonProps) => {
    return <div>
        <Link to='/'>
            <Button name="" isSize="small" isColor="white" onClick={props.handleNavigation} isHovered={props.activeSection === "" } isOutlined>Market Data</Button>
        </Link>
        <Link to='/blotter'>
            <Button name="blotter" isSize="small" isColor="white" onClick={props.handleNavigation} isHovered={props.activeSection === "blotter"} isOutlined>Blotter</Button>
        </Link>
    </div>
}

export default GroupButton