import React from 'react'
import {Field, Label, Control, Select} from 'bloomer'
import { PairProps } from '../docs/Interface';


const Pair = (props: PairProps) => (<Field>
    <Label>Pairs</Label>
    <Control>
        <Select name="pair" className="pair" onChange={props.handleChange}>
            {props.pairsAvailable.map((pair, index) => <option key={index} value={pair} defaultValue='All'>{ pair === 'All' ? 'all currencies' : pair}</option>)}
        </Select>
    </Control>
</Field>)

export default Pair