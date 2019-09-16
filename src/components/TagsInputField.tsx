import React from 'react'
import TagsInput from 'react-tagsinput'
import { TagsInputFieldProps } from '../docs/Interface';


const TagsInputField = (props : TagsInputFieldProps) => {
    return (
        <div className="field">
            <label className="label">{props.title}</label>
            <div className="control">
                <TagsInput value={props.fieldData} onChange={ props.handleChangeTags } inputProps={{placeholder:''}} maxTags={3}/>
            </div>
        </div>
    )
}
        
export default TagsInputField