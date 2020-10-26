import React from 'react'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import './Header.css'
import { useStateValue } from './StateProvider'

function Header() {
    const [{ user }] =useStateValue()
    return (
        <div className="header">
            <div className="header_left">
                {/*Avtars for logged in user */}
                {/* Time icon */}
                <Avatar
                    className="header_avatar"
                    alt={user?.displayName}
                    src={user.photoURL}
                />
                <AccessTimeIcon/> 
            </div>
            <div className="header_serach">
                {/*Search icon */}
                {/* input */}
                <SearchIcon />
                <input placeholder="Search"/>
            </div>
            <div className="header_right">

                {/*help icon */}
                <HelpOutlineIcon/>
            </div>
        </div>
    )
}

export default Header
