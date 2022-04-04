import React, { Component } from 'react';
import octocatImage from '../images/octocat.png';
import './settings.css';

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
            endTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
            defaultBreaks: [
                {
                    name: 'Coffee Break',
                    duration: 15,
                    enabled: true
                },
                {
                    name: 'Lunch Break',
                    duration: 60,
                    enabled: true
                },
                {
                    name: 'Lab Time',
                    duration: 45,
                    enabled: true
                }
            ]
        };
        this.updateEndTime = this.updateEndTime.bind(this);
    }
    updateEndTime(duration) {
        let newTime = new Date();
        newTime.setMinutes(newTime.getMinutes() + duration);
        this.setState({
            endTime: newTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
        });
    }
    render() {
        return (
            <div className="full-height-container">
                <div className="bg-white text-center octocat-container">
                    <img src={octocatImage} className="img-fluid" id="octocat-logo" alt="Octocat Logo" />
                </div>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-12 text-white text-center pb-5'>
                            <h1>It's {this.state.currentTime}. Time for a break?</h1>
                        </div>
                    </div>
                    <div className='row text-center pb-5'>
                        {this.state.defaultBreaks.map((item, index) => {
                            return (
                                <div className='col-12 col-md-6 col-lg-4' key={index}>
                                    <div className="card card-break mb-3 bg-dark text-white" onClick={() => this.updateEndTime(item.duration)}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                {/* <img src="..." class="img-fluid rounded-start" alt="..."> */}
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.name}</h5>
                                                    <p className="card-text">{item.duration} Minutes</p>
                                                    <p className="card-text">
                                                        <small className="text-muted">It will end at </small>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className='row text-center pb-5'>
                        <div className='col-12 text-center pb-5'>
                            <button className='btn btn-light btn-lg' onClick={() => this.props.history.push('/countdown')}>Start Break</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}