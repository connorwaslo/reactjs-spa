import React, { Component } from 'react';
import '../css/PageContainer.css';

export default class PageContainer extends Component {
    render() {
        return (
            <div className='idContainer' style={{ backgroundColor: this.props.bgColor }}>
                {this.props.children}
            </div>
        )
    }
}