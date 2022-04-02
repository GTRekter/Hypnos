import React, { Component } from 'react';
import QRCode from "react-qr-code";

export default class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
            endTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
        };
        this.updateEndTime = this.updateEndTime.bind(this);
    }
    updateEndTime(duration) {
        // let newTime = new Date();
        // newTime.setMinutes(newTime.getMinutes() + duration);
        // this.setState({
        //     endTime: newTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
        // });
    }
    render() {
        return (
            <div className="full-height-container container">
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4 py-5'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Coffee Break!</h5>
                                <p className='card-text'>Minutes until the break ends</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 py-5'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Scan Me!</h5>
                                <QRCode value="Bubu I love you" />
                                <p className='card-text'>Scan this QR code with your smartphone to get a mobile timer page</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 py-5'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Class will resume at:</h5>
                                <p className='card-text'>21:10 <br/> Sydney, Australia</p>
                                <p className='card-text'>18:10 <br/> London, United Kingdom</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}