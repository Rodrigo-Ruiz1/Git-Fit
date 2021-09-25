import React from 'react';
import { useEffect, useState} from 'react';
import { Dropdown } from 'react-bootstrap'
import Routines from '../components/Routines';
import RoutineDropdown from '../components/RoutineDropdown';

const Routine = ({ currentUser }) => {
    const [exercises, setExercises] = useState([]);
    const [allRoutines, setAllRoutines] = useState([]);
    const [userRoutine, setUserRoutine] = useState([]);

    const fetchExercises = async () => {
        const response = await fetch(
            'http://127.0.0.1:3001/api/v1/exercises/all'
        ).then(response => response.json());
        console.log("Exercise response: ", response);
        setExercises([...response])
    }

    const fetchUserRoutine = async(user_id) => {
        const response = await fetch(
            `http://127.0.0.1:3001/api/v1/routines/all/${user_id}`
        ).then(response => response.json());
        console.log("Routine Response: ", response);
        setUserRoutine(response)
    }
    // const fetchRoutineInfo = async(user_id) => {
    //     const response = await fetch(
    //         `http://127.0.0.1:3001/api/v1/routines/info/${user_id}`
    //     ).then(response => response.json());
    //     setAllRoutines(response)
    //     console.log('ROUTINE INFO: ', response)
    // }

    useEffect(() => {
        fetchExercises();
        if (currentUser !== undefined) {
            fetchUserRoutine(3);
            // fetchRoutineInfo(currentUser.id);
        }
    }, [currentUser])

    return (
        <div>
            {userRoutine.length > 0 ? (
                <Routines userRoutine={userRoutine} />
            ) : (
                null
            )}
        </div>
    )
}

export default Routine;