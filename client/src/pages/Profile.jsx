import React from 'react';
import { useState } from 'react'

const Profile = ({ currentUser, isAuthenticated }) => {
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
            verifyUser(currentUser.nickname, currentUser.nickname, currentUser.email, currentUser.picture);
            setButton('Verified')
        }
    }

    return (
        <div>
            {JSON.stringify(currentUser, null, 2)}
            {isAuthenticated === true ? (
                <button type="button" onClick={() => handleVerify()}>{button}</button>

            ) : (
                null
            )}
        </div>
    )
};

export default Profile