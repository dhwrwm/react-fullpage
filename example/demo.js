import './demo.css';

import * as React    from 'react';
import ReactDOM from 'react-dom';

import { SectionsContainer, Section, Header, Footer } from '../index';

const app = document.querySelector('#app');

class Example extends React.Component {
    render() {
        const options = {
            sectionClassName: 'section',
            anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
            scrollBar: false,
            navigation: true,
            verticalAlign: false,
            sectionPaddingTop: '50px',
            sectionPaddingBottom: '50px',
            arrowNavigation: true,
            scrollCallback: (states) => console.log(states)
        };

        return (
            <div>
                <Header>
                    <a href="#sectionOne" className="opa">Section One</a>
                    <a href="#sectionTwo">Section Two</a>
                    <a href="#sectionThree">Section Three</a>
                </Header>
                <Footer>
                    <a href="">Dcoumentation</a>
                    <a href="">Example Source</a>
                    <a href="">About</a>
                </Footer>
                <SectionsContainer className="container" {...options}>
                    <Section className="custom-section" verticalAlign="true" color="#69D2E7">Page 1</Section>
                    <Section color="#A7DBD8">Page 2</Section>
                    <Section color="#E0E4CC">Page 3</Section>
                </SectionsContainer>
            </div>
        )
    }
}

ReactDOM.render(<Example/>, app);
