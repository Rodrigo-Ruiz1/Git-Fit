import React from 'react';
import { useEffect, useState } from 'react';

const Feed = () => {
    const [feed, setFeed] = useState([]);


    const _fetchFeed = async () => {
        const response = await fetch(
            'http://127.0.0.1:3001/api/v1/posts/all/public'
            ).then(response => response.json());
            console.log('API RESPONSE: ', response);
            setFeed([...response])
            return response;
    }

    useEffect(() => {
        _fetchFeed()
    }, [])

    return (
        <div></div>
    )
}

export default Feed;