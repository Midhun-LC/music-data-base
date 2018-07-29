import React from 'react';
import classes from './Unknown.css'

const unknown=(props)=>{
    return (
        <div>
            <h3 className={classes.Unknown}>An unknown error occured.Please retry again.</h3>
            <button className={classes.Button} onClick={props.history.goBack}>Back</button>
            <button className={classes.Button} onClick={()=>props.history.replace('/Home')}>Home</button>
        </div>
    )
}

export default unknown;