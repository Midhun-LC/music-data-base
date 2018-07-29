import React, { Component } from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import ViewAlbums from '../ViewAlbums/ViewAlbums';
import AlbumSearch from '../AlbumSearch/AlbumSearch';
import classes from './Home.css';
import Unknown from '../../components/Unknown/Unknown';

class Home extends Component {
    render() {

        return (
            <div className={classes.content}>
                <header className={classes.header}>
                    <p>Welcome to Music DataBase</p>
                </header>
                <Switch>
                    <Route path='/Albums/:band' exact component={ViewAlbums} />
                    <Route path='/home/:band?' exact component={AlbumSearch} />
                    <Route path='/error' exact component={Unknown}/>
                    <Redirect from='/' to ='/home'/>
                </Switch>
                <footer className={classes.footer}>
                    <p>A project done by Midhun LC using React</p>
                </footer>
            </div>
        );
    }
}

export default Home;
