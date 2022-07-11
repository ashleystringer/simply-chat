import React, { useState, useRef } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import Error from './Error';
import axios from 'axios';

export default function Login({token}){

    const [error, setError] = useState();
    const usernameRef = useRef();
    const passwordRef = useRef();

    function handleSubmit(e){
        e.preventDefault();
        console.log('onSubmit');

        setError('');

        console.log(usernameRef.current.value);
        console.log(passwordRef.current.value);

        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };

        axios.post(`http://localhost:5000/auth/login`, data,  { withCredentials: true })
            .then(data => {
                console.log(data);
                token(data.data.token);
            })
            .catch(err => {
                console.log(err);
                console.log(err.response.data.error);
                setError(err.response.data.error);
            })
        
    }

    return(
        <>
            <Container className="align-items-center d-flex">
                <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Username:</Form.Label>
                            <Form.Control type='text' ref={usernameRef}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef}></Form.Control>
                        </Form.Group>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
            {error && <Error error={error}/>}
        </>
    );
}