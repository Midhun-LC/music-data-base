import React,{Component} from 'react';
import classes from './AlbumSearch.css';
import SearchBox from '../../components/SearchBox/SearchBox'
import SearchResults from '../../components/SearchResults/SearchResults';
import axios from '../../axios';
import Spinner from '../../components/Spinner/Spinner';

class AlbumSearch extends Component{

    state={
        disabled:true,
        results:null,
        searchTerm:"",
        searchClicked:false,
        searchComplete:false
    }

    componentDidMount(){
        if (this.props.match.params.band!==undefined){
            this.setState({
                searchClicked: true,
                searchTerm: this.props.match.params.band,
                results:null,
                disabled: false
            },this.searchHandler());
            
        }
    }
    searchHandler=()=>{
        this.setState({
            searchClicked: true,
        })
        axios.get("search.php?s=" + (this.state.searchTerm?this.state.searchTerm :this.props.match.params.band))
                .then(
                        response => {
                            //console.log(response);
                            this.setState({
                            results: response.data,
                            searchComplete:true
                            });

                            this.props.history.push('/home/'+this.state.searchTerm);
                        }
                )
                .catch(error=>{
                    this.props.history.push('/error');
                });
        
    }

    inputChangeHandler=(event)=>{
        if(event.target.value.trim()){
            this.setState({
                disabled:false,
                searchTerm: event.target.value.trim(),
                searchClicked:false,
                results: null,
                searchComplete: false
            })
        }
        else{
            this.setState({
                disabled:true,
                searchTerm:'',
                searchClicked: false,
                results: null,
                searchComplete: false
            });
        }
    }


    render(){

        let spinner=null;
        if (!this.state.results && this.state.searchClicked){
            spinner=<Spinner/>
        }

        return (
            <div className={classes.AlbumSearch}> 
                <SearchBox disabled={this.state.disabled} search={this.searchHandler} onChange={this.inputChangeHandler} searchitem={this.state.searchTerm}/>
                {spinner}
                <SearchResults wasSearched={this.state.searchComplete} results={this.state.results}/>
            </div>
        );
    }
}

export default AlbumSearch;
