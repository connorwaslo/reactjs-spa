import React, {Component} from 'react';
import PageContainer from "./PageContainer";
import AnimatedText from './AnimatedText';
import '../css/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <PageContainer bgColor='#2994DA'>
                    <p>Howdy, I'm Connor!</p>
                </PageContainer>

                <PageContainer bgColor='#077CC8'>
                    <AnimatedText>
                        <h1>Hey there</h1>
                    </AnimatedText>
                    <AnimatedText delay={1000}>
                        <p>I'm Connor</p>
                    </AnimatedText>
                </PageContainer>

                <PageContainer bgColor='#043B5F'>

                </PageContainer>

                <PageContainer bgColor='#011A2A'>

                </PageContainer>
            </div>
        );
    }
}

export default App;
