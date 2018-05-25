import React from 'react';

export default (props) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>name</th>
                <th>surname</th>
                <th>age</th>

            </tr>
            </thead>
            <tbody>

            {props.users.map((value, key) => {
                return (<tr key={key}>
                    <td>{value.name}</td>
                    <td>{value.surname}</td>
                    <td>{value.age}</td>
                    <td>
                        <button
                            onClick={() => alert(`Hello ${value.name} ${value.surname}`)}
                        >
                        </button>


                    </td>
                </tr>)
            })}
            </tbody>
        </table>
    )
}