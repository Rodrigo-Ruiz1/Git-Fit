import React from 'react';

const Profile = ({currentUser}) => {


    return (
        <div>
            {JSON.stringify(currentUser, null, 2)}
        </div>
    )
};

export default Profile