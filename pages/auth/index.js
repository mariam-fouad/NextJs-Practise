import React from 'react';
import Router from 'next/router';
import User from '../../component/User'
const indexAuthPage = ()=>{
    return (
        <React.Fragment>
            <h1>This is the auth main page</h1>
            <User name="Mariam" age={23}/>
            <button onClick={()=>{Router.push("/")}}>Go to the root</button>
        </React.Fragment>
        
    );
};

export default indexAuthPage;