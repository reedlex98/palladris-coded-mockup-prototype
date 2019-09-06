import React from 'react'
import { Button } from 'bloomer'

type GroupButtonProps = {
    focusedId: number
}

const GroupButton = ({ focusedId } : GroupButtonProps) => {
    return <div style={{alignSelf: "center"}}>
        <Button isSize="small" isColor="white" isFocused={focusedId === 0} isOutlined>Market Data</Button>
        <Button isSize="small" isColor="white" isFocused={focusedId === 1} isOutlined>Blotter</Button>
    </div>
}

export default GroupButton