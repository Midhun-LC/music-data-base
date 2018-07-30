import React,{Component} from 'react';
import Modal from '../../components/Modal/Modal';
import ViewTracks from '../ViewTracks/ViewTracks';
import Spinner from '../../components/Spinner/Spinner';
import classes from './ViewAlbums.css'
import Aux from '../../HOC/hoc';
import axios from '../../axios';

class ViewAlbums extends Component{

    state={
        albums:null,
        selectedAlbum:null,
        selectedAlbumName: null,
        showModal: false,
        searchComplete: false
    }

    componentDidMount(){
        if(!this.state.albums){
            
            axios.get("searchalbum.php?s=" + this.props.match.params.band)
                .then(response => {
                    this.setState({
                        albums: response.data.album,
                        searchComplete: true
                    })
                })
                .catch(error=>{
                    console.log(error);
                    this.props.history.push('/error');
                })
        }       
            
    }

    AlbumClickHandler=(album)=>{
        //console.log("album:[" + album.strAlbum+"] was clicked");
        this.setState({
            selectedAlbum: album.idAlbum,
            selectedAlbumName: album.strAlbum,
            showModal:true
        })
    }

    closeModal=()=>{
        this.setState({
            showModal: false
        })
    }

    render(){
        let albumList=null;

        if(!this.state.albums){
            if (!this.state.searchComplete){

                albumList = <Spinner />;
            }
            else{
                albumList = <p>No albums found for the band:{this.props.match.params.band}</p>
            }
        }
        else{
            albumList = this.state.albums.map((album, index) => {
                return  <div className={classes.item} key={index}>
                            <div>
                                <p><i style={{ fontSize: "50px",margin:"3px"}} className="fas fa-compact-disc"></i></p>
                            </div>
                            <div>
                                <p>{album.strAlbum}({album.intYearReleased})</p>
                                <p  className={classes.link} onClick={() => this.AlbumClickHandler(album)}>View tracks</p>
                            </div>
                        </div>
            });
        }


        return(
            <Aux>
            <Modal display={this.state.showModal} click={this.closeModal} artist={this.state.selectedAlbumName}>
                <ViewTracks albumID={this.state.selectedAlbum} />
            </Modal>
            <div className={classes.ViewAlbums}>
                <div className={classes.Title}>
                    <div className={classes.Icon}> 
                        <i className="fas fa-user-alt"></i>
                    </div>
                    <div className={classes.BandName}>
                        <p>{this.props.match.params.band}</p>
                    </div>
                </div>
                {albumList}
                <button className={classes.Button} onClick={this.props.history.goBack}>Back</button>
            </div>
            </Aux>
        )
    }
}

export default ViewAlbums;