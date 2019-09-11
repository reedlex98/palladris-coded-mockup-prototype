import React from 'react'
import { Button } from 'bloomer'

type GroupButtonProps = {
    hoveredId: number
}

const GroupButton = ({ hoveredId } : GroupButtonProps) => {
    return <div style={{alignSelf: "center"}}>
        <Button isSize="small" isColor="white" isHovered={hoveredId === 0} isOutlined>Market Data</Button>
        <Button isSize="small" isColor="white" isHovered={hoveredId === 1} isOutlined>Blotter</Button>
    </div>
}

export default GroupButton