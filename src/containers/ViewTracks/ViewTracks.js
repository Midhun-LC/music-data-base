import React,{ Component } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import classes from './ViewTracks.css';
import {withRouter} from 'react-router-dom'
import axios from '../../axios';

class ViewTracks extends Component{

    state={
        trackList:null
    }

    componentDidMount(){
        //console.log("Inside tracks component")
        if (this.props.albumID){
            axios.get('track.php?m=' + this.props.albumID)
                .then(response => {
                    //console.log(response.data)
                    this.setState({
                        trackList: response.data.track
                    });
                })
                .catch(error=>{
                    this.props.history.push('/error');
                });
        }
    }

    render(){

        let tracks=null;
        if(this.state.trackList){
            tracks=this.state.trackList.map((track,index)=>{

                return  <div key={index} className={classes.Item}>
                            <div>
                                <p><i className="fas fa-music"></i></p>
                            </div>
                            <div>
                                <p>{track.strTrack}</p>
                            </div>
                        </div>
            });
        }
        else{
            tracks=<Spinner/>
        }
        //console.log(this.props.history);
        return (
            
            <div className={classes.ViewTracks}>
                {tracks}
            </div>
        );
    }
}

export default withRouter(ViewTracks);