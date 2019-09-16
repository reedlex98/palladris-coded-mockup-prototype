import React from 'react'
import { Field, Label, Control, Input } from 'bloomer'
import TagsInputField from './TagsInputField'
import Datepicker from './Datepicker'
import { FilterProps } from '../docs/Interface';

export default function Filter(props: FilterProps) {
    return <div className="filter" style={{ minHeight: props.blotterState.isFilterCollapsed ? '50px' : '250px' }}>
        <h1>Filter</h1>
        <div className='collapseToggler' onClick={() => props.functions.handleCollapse()}>{props.blotterState.isFilterCollapsed ? '<' : '>'}</div>
        <form style={{ display: props.blotterState.isFilterCollapsed ? 'none' : 'flex' }} className="market-data-form">
            <TagsInputField fieldData={props.blotterState.pairs} handleChangeTags={props.functions.handleChangeTags} title="Pairs" />
            
            <Datepicker dateValue={props.blotterState.minDate} handleChange={props.functions.handleChangeDate} maxDate={props.blotterState.maxDate} minDate={props.blotterState.minDate} name="minDate" title="Start" />
            
            <Datepicker dateValue={props.blotterState.maxDate} handleChange={props.functions.handleChangeDate} maxDate={props.blotterState.maxDate} minDate={props.blotterState.minDate} name="maxDate" title="End" />
            
            <Field>
                <Label>Min Price</Label>
                <Control>
                    <Input name="minPrice" value={props.blotterState.minPrice} onChange={props.functions.handleChange} type="number"/>
                </Control>
            </Field>
            
            <Field>
                <Label>Max Price</Label>
                <Control>
                    <Input name="maxPrice" value={props.blotterState.maxPrice} onChange={props.functions.handleChange} type="number"/>
                </Control>
            </Field>
            
            <Field>
                <Label>Min Qty</Label>
                <Control>
                    <Input name="minQty" value={props.blotterState.minQty} onChange={props.functions.handleChange} type="number"/>
                </Control>
            </Field>
            
            <Field>
                <Label>Max Qty</Label>
                <Control>
                    <Input name="maxQty" value={props.blotterState.maxQty} onChange={props.functions.handleChange} type="number"/>
                </Control>
            </Field>
        </form>
    </div>
}
