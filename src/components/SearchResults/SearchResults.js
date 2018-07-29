import React from 'react';
import classes from './SearchResults.css';
import { Link } from 'react-router-dom';

const searchResults=(props)=>{

    var artistList=null;

    if(props.results){
        if (!props.results.artists) {
            if (props.wasSearched) {

                artistList = <p>No Matching artists Found</p>
            }
        }
        else {
            artistList = props.results.artists.map((artist, index) => {
                return (
                
                <div className={classes.Item} key={index}>
                    <div>
                            <p><i style={{ fontSize: "50px", margin: "3px" }} className="fas fa-user-alt"></i></p>
                    </div>
                    <div>
                    <p className={classes.Artist}>{artist.strArtist}</p>
                            <p className={classes.Link}><Link to={{ pathname: '/albums/' + artist.strArtist }}>View Albums</Link></p>
                    </div>
                </div>
                );
            });
        }
    }
    

    return (
        <div className={classes.SearchResults}>
            {artistList}
        </div>
    )
}

export default searchResults;