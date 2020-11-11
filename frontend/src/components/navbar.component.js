import { Link } from 'react-router-dom';

import React, { Component } from "react"

export default class Navbar extends Component {
    render() {
        return (
            <nav classname="navbar navbar-expand-lg navbar-light bg-light">
                <Link classname="navbar-brand" href="#">ExerciseTracker</Link>
                <button classname="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span classname="navbar-toggler-icon"></span>
                </button>

                <div classname="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul classname="navbar-nav mr-auto">
                    <li classname="nav-item active">
                        <Link classname="nav-link" href="#">Exercises<span classname="sr-only">(current)</span></Link>
                    </li>
                    <li classname="nav-item">
                        <Link classname="nav-link" href="#">Create Exercise Log</Link>
                    </li>
                    <li classname="nav-item dropdown">
                        <Link classname="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Create User
                        </Link>
                        <div classname="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link classname="dropdown-item" href="#">Action</Link>
                            <Link classname="dropdown-item" href="#">Another action</Link>
                            <div classname="dropdown-divider"></div>
                            <Link classname="dropdown-item" href="#">Something else here</Link>
                        </div>
                    </li>
                    <li classname="nav-item">
                        <Link classname="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
