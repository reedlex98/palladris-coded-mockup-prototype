import React from 'react'
import {Field, Label, Control, Input} from 'bloomer'


const Datepicker = (props: DatepickerProps) => (<Field>
    <Label>{props.title}</Label>
    <Control>
        {/* min={props.min} max={props.max}  */}
        <Input type="datetime-local" className="input" />
    </Control>
</Field>
)

export default Datepicker