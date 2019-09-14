import React from 'react'
import { Field, Label, Control } from 'bloomer'
import DatePicker from 'react-datepicker'

const Datepicker = (props: {title: string, name: string, handleChange: Function, dateValue: Date, minDate: Date, maxDate: Date} ) => {
    return (
        <Field>
            <Label>{props.title}</Label>
            <Control>
                < DatePicker className="input" selected={props.dateValue} onChange={(date: any) => props.handleChange(date, props.name)}  minDate={props.name === 'maxDefaultDate' && props.minDate } showTimeSelect dateFormat="dd/MM/yyyy hh:mm"/>
            </Control>
        </Field>
    )
}
// const Datepicker = (props: DatepickerProps) => {
//     const timeStamp = (m: Date) => `${m.getFullYear}:${m.getMonth}:${m.getDay}T${m.getHours}:${m.getMinutes}`
//     const min = timeStamp(props.min)
//     const max = timeStamp(props.max)
//     return (<Field>
//         <Label>{props.title}</Label>
//         <Control>
//             {/* min={props.min} max={props.max}  */}
//             <Input name="minSearchDate" type="datetime-local" className="input" onChange={props.handleChange} value={props.dateValue.toString()} min={min} max={max} />
//         </Control>
//     </Field>
//     )
// }

export default Datepicker