import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


export default class Header extends Component {

    render() {
        return (
            <>
                <NavLink to='/'><button className="button is-danger is-outlined">Home</button></NavLink>
                <NavLink to='/register'><button className="button is-danger is-outlined">Register</button></NavLink>
                <NavLink to='/login'><button className="button is-danger is-outlined">Login</button></NavLink>
            </> // this is the shorter syntax for react fragment it allows you to wrap more than one element without having to wrap them all in individual div tags 
        )
    }
}