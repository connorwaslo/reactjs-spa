import React, { Component } from 'react';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class AnimatedText extends Component {
    render() {
        return (
            <ScrollAnimation animateIn='jackInTheBox'
                             animateOnce={true}
                             duration={0.5}
                             {...this.props}>
                {this.props.children}
            </ScrollAnimation>
        )
    }
}