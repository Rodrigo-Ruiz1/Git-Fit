import React from 'react';
import { Table } from 'react-bootstrap';


const Routines = ({ userRoutine }) => {



    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th colSpan="4">{userRoutine[0].title}</th>
                </tr>
            </thead>
            <tbody>
                {userRoutine.map(routine => {
                    return (
                        <tr>
                            <td>{routine.name}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default Routines;