
import { Checkbox, IconButton } from '@material-ui/core'
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


function EmailRow({ id, title, subject, description, time}) {
    const history = useHistory();
    return (
        <div className="emailRow" >
            
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined/>
                </IconButton>
            </div>

            <h3 className="emailRow__title">
            {title}    
            </h3>

            <div className="emailRow__message">
                <h4>
                {subject} {" "}
                    <span className="emailRow__description">
                        - {description}
                    </span>
                </h4>
            </div>

            <p className="emailRow__time">
                {time}
            </p>


        </div>
    )
}

export default EmailRow