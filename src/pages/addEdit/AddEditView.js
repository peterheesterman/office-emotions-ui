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

                {props.commands.map(function(command) {
                    const name = command.name; 
                    const totalTime = command.steps.reduce((acc, step, i) => acc + step.time);

                    command.steps.forEach(function(step) {
                        let time = step.time;
                        let style = { 'background-color' : '#' + step.color };                     
                        let width = Math.min((step.time / totalTime) * 100); 
                    });
                    
                    return (
                        <div key={command.name} style={{"border":"1px solid blue"}} onClick={()=>{test(command.name)}}>
                            <h1>{command.name}</h1>
                        </div>
                    );    
                })}
            </div>
        </div>
        <Footer />
    </div>
)
