import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../HOC/Aux'

const modal=(props)=>{

    let modal=  <Aux>
                    <Backdrop click={props.click}/>
                    
                    <div className={classes.ModalContainer}>
                        <div className={classes.Titlebar}>
                            <div className={classes.Title}><p onClick={props.click} style={{ margin: 0 }}>Tracklist</p></div>
                            <div className={classes.Close}><p onClick={props.click} style={{ margin: 0 }}><i className="fas fa-window-close"></i></p></div>
                        </div>
                        <div className={classes.Modal}>
                            <div>
                                <p style={{ fontSize: "30px", margin: "3px" }}><i className="fas fa-compact-disc"></i>{props.artist}</p>
                            </div>
                            <div>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </Aux>;
    return(
        props.display?modal:null
    );
}

export default modal;