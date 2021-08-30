import React from 'react';
import { useEffect, useState } from 'react';

const Routine = () => {
    const [exercises, setExercises] = useState([]);

    const fetchExercises = async() => {
        const response = await fetch(
            'http://127.0.0.1:3001/api/v1/exercises/all'
            ).then(response => response.json());
            console.log(response);
            setExercises([...response])
    }

    useEffect(() => {
        fetchExercises();
    }, [])

    return (
        <div>
            {exercises.map(exercise => {
                return (
                    <p>{exercise.name}</p>
                )
            })}
        </div>
    )
}

export default Routine;