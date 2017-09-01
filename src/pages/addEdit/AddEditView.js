import React from 'react'

import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'

const test = function (itemName) {
    console.log(itemName)
    fetch('http://192.168.88.54:3000/play/'+itemName);
}

export const AddEditView = (props) => (        
    <div className="AddEditView">
        <Header />
        <div className="AddEditView-content">
            <div>
                <h1>Office</h1>
                <h1>Emotions</h1>
                {props.items.map(item => 
                    <div key={item} style={{"border":"1px solid blue"}} onClick={()=>{test(item)}}>
                        <h1 key={item}>{item}</h1>
                    </div>
                )}
            </div>
        </div>
        <Footer />
    </div>
)
