import React from 'react'
import { Field, Label, Control } from 'bloomer'
import DatePicker from 'react-datepicker'
import { DatepickerProps } from '../docs/Interface';

const Datepicker = (props: DatepickerProps ) => {
    return (
        <Field>
            <Label>{props.title}</Label>
            <Control>
                < DatePicker className="input" selected={props.dateValue} onChange={(date: any) => props.handleChange(date, props.name)}  minDate={props.name === 'maxDefaultDate' && props.minDate } showTimeSelect dateFormat="dd/MM/yyyy hh:mm"/>
            </Control>
        </Field>
    )
}

export default Datepicker