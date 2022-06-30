import React, { useState, useRef } from 'react';
import {Form, Container, Button } from 'react-bootstrap';
import Error from './Error';
import axios from 'axios';

export default function Register(){

    const [error, setError] = useState();
    const emailRef = useRef();
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
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        axios.post(`http://localhost:5000/auth/register`, data,  { withCredentials: true })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
                setError(err.response.data.error);
            })
    }

    return(
        <>
            <Container className="align-items-center d-flex">
                <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='text' ref={emailRef}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
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