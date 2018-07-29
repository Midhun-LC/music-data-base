import React from 'react';
import classes from './SearchBox.css';

const search=(props)=>{

    return (
        <div className={classes.SearchBox}>
            <input type="text" value={props.searchitem} placeholder="Enter artist/band name" onChange={props.onChange}/>
            <button className={classes.Button} onClick={props.search} disabled={props.disabled}>Search</button>
        </div>
    );
}

export default search;