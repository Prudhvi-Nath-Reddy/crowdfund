import React, { Fragment } from 'react';
import {link} from "react-router-dom";
const Home = () => {
    return(
        <Fragment>
            welcome to crowdfund
            <div>
                <a href='/addcause'> 
                    <button className="ui button red">Get money for a cause</button>
                </a>  
                <a href='/causelist'>
                    <button className="ui button red right">Donate money for a cause</button>    
                </a>
            </div>
        </Fragment>
    )
}

export default Home;