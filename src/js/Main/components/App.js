import React from 'react'
import Values from './Values'

const App = () => (
    <div>
        <div className="jumbotron jumbotron-fluid background-image">
            <div className="container">
                <div className="row">
                    <div className="col-8 text-white">
                        <h1 className="display-1">ProActive</h1>
                        <p className="h2">Workflow engine for scheduling, <br /> meta-scheduling and orchestration</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <Values/>
        </div>
    </div>
);

export default App;
