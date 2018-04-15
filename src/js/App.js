import React, {Component} from 'react';
import OnImagesLoaded from 'react-on-images-loaded';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import PageContainer from "./PageContainer";
import AnimatedText from './AnimatedText';
import '../css/App.css';
import 'animate.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: true,
            showIntro1: false,
            showIntro2: false
        };
    }

    componentDidMount() {
        this.setState({ isLoading: false });

        this.firstTimer = setTimeout(() => this.setState({ showIntro1: true }), 1500);
        this.secondTimer = setTimeout(() => this.setState({ showIntro2: true }), 3500);
    }

    componentDidUnmount() {
        this.firstTimer.clearTimeout();
        this.secondTimer.clearTimeout();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            )
        }

        return (
            <OnImagesLoaded
                onLoaded={() => console.log('loaded')}
                onTimeout={() => console.log('timeout')}
                timeout={7000}>
                <div className="App">
                    {/* Header with PHX background */}
                    <ParallaxProvider>
                        <Parallax
                            offsetXMax={-10}
                            offsetXMin={-10}
                            offsetYMax={100}
                            offsetYMin={-100}
                            slowerScrollRate
                            tag='figure'>

                            <div className='imageContainer'>
                                {this._renderIntro1()}
                                {this._renderIntro2()}
                            </div>
                        </Parallax>
                    </ParallaxProvider>

                    <PageContainer bgColor='#2994DA'>
                        <AnimatedText>
                            <h2>About Me</h2>
                        </AnimatedText>
                    </PageContainer>

                    <PageContainer bgColor='#077CC8'>
                        <AnimatedText>
                            <h1>Hey there</h1>
                        </AnimatedText>
                        <AnimatedText delay={500}>
                            <p>I'm Connor</p>
                        </AnimatedText>
                    </PageContainer>

                    <PageContainer bgColor='#043B5F'>

                    </PageContainer>

                    <PageContainer bgColor='#011A2A'>

                    </PageContainer>
                </div>
            </OnImagesLoaded>
        );
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
}

export default App;
