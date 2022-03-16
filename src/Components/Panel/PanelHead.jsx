import React from 'react'
import { useSelector } from 'react-redux'
import './Style.scss'

const PanelHead = () => {

    const { user } = useSelector(state => state.auth);

    return (
        <div className="panel-content__details">
            <div className="panel-content__details-email">Email : {user && user.email}</div>
            <button className="panel-content__details-password">Change Password</button>
        </div>
    )
}

export default PanelHead