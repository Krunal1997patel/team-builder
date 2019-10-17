import React,{useState} from 'react';

const TeamForm = props =>{

    const [team, setTeam] = useState({
        name: '',
        email: '',
        role: ''
    })

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(team)
        setTeam({
            name: '',
            email: '',
            role: ''
        })
    }

    const changeHandler = event =>{
        setTeam({...team, [event.target.name]: [event.target.value]})
    }


    return(
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input 
                type='text'
                placeholder='Full Name'
                name='name'
                value={team.name}
                onChange={changeHandler}
                required
            />

            <br/>

            <label htmlFor='email'>Email</label>
            <input 
                type='email'
                placeholder='Email'
                name='email'
                value={team.email}
                onChange={changeHandler}
            />

            <br/>

            <label htmlFor='role'>Role</label>
            <input 
                type='text'
                placeholder='Job Role'
                name='role'
                value={team.role}
                onChange={changeHandler}
            />

            <br/>

            <button type='submit'>Join The Team</button>


        </form>
    )
}

export default TeamForm;