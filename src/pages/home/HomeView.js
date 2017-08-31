import React from 'react'

import Typist from 'react-typist'

import { Header } from '../../components/header/Header'
import { CardContainer } from '../../components/card-container/cardContainer'
import { Footer } from '../../components/footer/Footer'



export const HomeView = (props) => (        
    <div className="HomeView">
        <Header />
        <div className="HomeView-content">
            <div>
                <h1>Office</h1>
                <h1>Emotions</h1>
                <h4>
                    <Typist
                        avgTypingDelay={60}
                        cursor={{
                            show: true,
                            blink: true,
                            element: '_',
                            hideWhenDone: true,
                            hideWhenDoneDelay: 100,
                        }}
                        className="MyTypist"
                        onTypingDone={function () {
                            console.log('use this for something interesting?')
                        }}
                    >
                        The office is very emtional today.
                    </Typist>
                </h4>
            </div>
            <CardContainer cards={props.items} />
        </div>
        <Footer />
    </div>
)
