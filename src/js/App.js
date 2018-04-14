import React, {Component} from 'react';
import OnImagesLoaded from 'react-on-images-loaded';
import PageContainer from "./PageContainer";
import AnimatedText from './AnimatedText';
import '../css/App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {
        this.setState({ isLoading: false });
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
                    <div className='imageContainer'>

                    </div>

                    <PageContainer bgColor='#2994DA'>
                        <p>Howdy, I'm Connor!</p>
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
}

export default App;
