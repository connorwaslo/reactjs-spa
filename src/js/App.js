import React, {Component} from 'react';
import OnImagesLoaded from 'react-on-images-loaded';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import PageContainer from "./PageContainer";
import AnimatedText from './AnimatedText';
import phx from '../assets/phx_big.jpg';
import '../css/App.css';
import 'animate.css';

class App extends Component {
    constructor() {
        super();

        this.handleImgLoad = this._handleImgLoad.bind(this);

        this.state = {
            isLoading: true,
            showIntro1: false,
            showIntro2: false
        };
    }

    componentDidMount() {
        this.firstTimer = setTimeout(() => this.setState({ showIntro1: true }), 1500);
        this.secondTimer = setTimeout(() => this.setState({ showIntro2: true }), 3500);
    }

    componentWillUnmount() {
        this.firstTimer.clearTimeout();
        this.secondTimer.clearTimeout();
    }

    render() {
        return (
            <OnImagesLoaded
                onLoaded={() => this.setState({ isLoading: false })}
                onTimeout={() => console.log('timeout')}
                timeout={7000}>

                {this._renderLoading()}
                {this._renderContent()}
            </OnImagesLoaded>
        );
    }

    _renderLoading() {
        if (this.state.isLoading) {
            return (
                <div className='loadingContainer'>
                    <div className="lds-ripple">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            );
        }

        return null;
    }

    _renderContent() {
        if (!this.state.isLoading) {
            return (
                <div className="App">
                    {/* Header with PHX background */}
                    <ParallaxProvider>
                        <Parallax
                            offsetXMax={0}
                            offsetXMin={0}
                            offsetYMax={50}
                            offsetYMin={-50}
                            slowerScrollRate>

                            <div className='imageContainer'>
                                <img id='bgImage'
                                     onLoad={this.handleImgLoad}
                                     src={phx}
                                     alt='background'/>
                                {this._renderIntro1()}
                                {this._renderIntro2()}
                            </div>
                        </Parallax>
                    </ParallaxProvider>

                    <PageContainer bgColor='#4E83EB'>
                        <AnimatedText>
                            <h2>About Me</h2>
                        </AnimatedText>
                        <AnimatedText delay={500}>
                            <p>
                                I'm a senior at BASIS Phoenix working on making a tech education accessible to everybody.
                            </p>
                        </AnimatedText>
                    </PageContainer>

                    <PageContainer bgColor='#2C6AE6'>
                        <AnimatedText>
                            <h1>Hey there</h1>
                        </AnimatedText>
                        <AnimatedText delay={500}>
                            <p>I'm Connor</p>
                        </AnimatedText>
                    </PageContainer>

                    <PageContainer bgColor='#0943B6'>

                    </PageContainer>

                    <PageContainer bgColor='#083388'>

                    </PageContainer>
                </div>
            )
        }

        return null;
    }

    _renderIntro1() {
        if (this.state.showIntro1)
            return <h1 id='intro1'>Hi! I'm Connor Waslo.</h1>;

        return null;
    }

    _renderIntro2() {
        if (this.state.showIntro2)
            return <h1 id='intro2'>Phoenix-based social entrepreneur and developer.</h1>;

        return null;
    }

    _handleImgLoad() {
        this.setState({ isLoading: false });
    }
}

export default App;
