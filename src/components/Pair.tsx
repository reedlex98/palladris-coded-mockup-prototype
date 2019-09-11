import React from 'react'
import {Field, Label, Control, Select} from 'bloomer'


const Pair = (props: PairProps) => (<Field>
    <Label>Pairs</Label>
    <Control>
        <Select name="pair" onChange={props.handleChange}>
            {props.pairsAvailable.map((pair, index) => <option key={index} value={pair}>{pair}</option>)}
        </Select>
    </Control>
</Field>)

export default Pair