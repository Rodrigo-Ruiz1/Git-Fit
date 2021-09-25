import React from 'react';
import { useState } from 'react'
import {MainDiv, ProfilePic} from '../styled/StyledProfile';

const Profile = ({ currentUser, user, isAuthenticated }) => {
    const [button, setButton] = useState('Verify Account');

    const verifyUser = async (name, username, email, picture) => {
        const response = await fetch('http://127.0.0.1:3001/api/v1/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                username: username,
                email: email,
                picture: picture
            })
        });
        const parseResponse = await response.json();
        console.log(parseResponse);
    }

    const handleVerify = () => {
        if (button === "Verify Account") {
            verifyUser(user.nickname, user.nickname, user.email, user.picture);
            setButton('Verified')
        }
    }

    console.log('user: ', currentUser);
    console.log(user)

    return (
        <MainDiv>
            {/* {JSON.stringify(user, null, 2)} */}
            {currentUser !== undefined ? (
                <>
                <ProfilePic src={currentUser.picture} alt={currentUser.name}></ProfilePic>
                <h1>{currentUser.name}</h1>
                <p>Created: {currentUser.created_at}</p>
                </>
            ) : (
                <button type="button" onClick={() => handleVerify()}>{button}</button>
            )}
        </MainDiv>
    )
};

export default Profile