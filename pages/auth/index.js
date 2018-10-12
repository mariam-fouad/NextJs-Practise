import React from 'react';
import Router from 'next/router';
import User from '../../component/User'
const indexAuthPage = (props)=>{
    return (
        <React.Fragment>
            <h1>This is the auth main page from  {props.appName}</h1>
            <User name="Mariam" age={23}/>
            <button onClick={()=>{Router.push("/")}}>Go to the root</button>
        </React.Fragment>
        
    );
};

indexAuthPage.getInitialProps=(context)=>{
    const promise = new Promise ((resolve, reject)=>{
        setTimeout(() => {
            resolve({appName : 'Next js'});
        }, 3000);
    });
    return promise;
    };
      

export default indexAuthPage;