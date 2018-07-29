import React,{ Component } from 'react';
import classes from './App.css';
import Home from './containers/Home/Home';
import {BrowserRouter} from 'react-router-dom';

class App extends Component{

    render(){

        return(
            <BrowserRouter>
                <div className={classes.App}>
                    <Home/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
