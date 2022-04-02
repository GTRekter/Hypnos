import React, { Component } from 'react';
import octocatImage from '../images/octocat.png';
import './home.css';

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
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-12 text-white py-5'>
                            <h1>It's {this.state.currentTime}. Time for a break?</h1>
                        </div>
                    </div>
                    <div className='row'>
                        {this.state.defaultBreaks.map((item, index) => {
                            return (
                                <div className='col-12 col-md-6 col-lg-4 py-5' key={index}>
                                    <div className='card' onClick={() => this.updateEndTime(item.duration)}>
                                        <div className='card-body'>
                                            <h5 className='card-title'>{item.name}</h5>
                                            <p className='card-text'>{item.duration} Minutes</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* <div className='row'>
                        <div className='col-12 text-center text-white py-5'>
                            Break end Time: {this.state.endTime}
                        </div>
                    </div> */}
                    <div className='row'>
                        <div className='col-12 text-center py-5'>
                            <button className='btn btn-light btn-lg' onClick={() => this.props.history.push('/countdown')}>Start Break</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}