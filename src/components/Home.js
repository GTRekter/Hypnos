import React, { Component } from 'react';
import octocatImage from '../images/octocat.png';
import './home.css';

export default class Home extends Component {
    render() {
        return (
            <div className="full-height-container">
                <div className="bg-white text-center octocat-container">
                    <img src={octocatImage} className="img-fluid" id="octocat-logo" alt="Octocat Logo" />
                </div>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-12 text-white py-5'>
                            <h1>Take a Break</h1>
                            <p className="lead">This open-source application will help you provide beautiful countdown screens for various breaks in virtual trainings and workshops.</p>
                            <button className="btn btn-light btn-lg" onClick={() => this.props.history.push('/settings')}>Get Started</button>             
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}