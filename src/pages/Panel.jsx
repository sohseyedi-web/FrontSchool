import React from 'react';
import Container from '../Container/Container';

const Panel = () => {
    return (
        <Container>
            <section className="panel">
                <div className="panel-content container">
                    <div className="panel-content__details"></div>
                    <div className="panel-content__list"></div>
                </div>
            </section>
        </Container>
    );
};

export default Panel;
