import React, { Component } from 'react';
import Footer from './Footer';

export class Layout extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid px-0">
                    <div className="row mx-0">
                        <div className="col-12 px-0 bg-gloss-gray-900">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}