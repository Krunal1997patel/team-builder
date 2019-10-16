import React from 'react';

const Teamcard = props => {

    // console.log(props);

    return(
        <div>
            {
                props.info.map(person =>(
                    <div>
                        <h1>{person.name}</h1>
                        <h3>{person.email}</h3>
                        <h3>{person.role}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default Teamcard;