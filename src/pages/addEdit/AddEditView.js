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
                    const totalTime = command.steps.reduce(function(acc, step, i) { return acc + step.time; }, 0);
                    
                    console.log(totalTime);

                    let segments = command.steps.map(function(step) {
                        console.log(step);
                        let time = step.time;
                        let width = Math.min((step.time / totalTime) * 100); 

                        let style = { 
                            'backgroundColor' : '#' + step.color,
                            'width' : width + '%'
                        };                     

                        return (
                            <div className="AddEdit-segment" style={style} />
                        );
                    });
                    
                    return (
                        <div className="AddEdit-command" key={command.name} style={{"border":"1px solid blue"}} onClick={()=>{test(command.name)}}>
                            <h1 className="AddEdit-title">{command.name}</h1>
                            {segments}
                        </div>
                    );    
                })}
            </div>
        </div>
        <Footer />
    </div>
)
