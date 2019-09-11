import React from 'react'
import TagsInput from 'react-tagsinput'

const Provider = (props : ProviderProps) => {
    return (
        <div className="field">
            <label className="label">Provider</label>
            <div className="control">
                <TagsInput value={props.providers} onChange={ props.handleChangeProviders} maxTags={3}/>
            </div>
        </div>
    )
}
        
export default Provider