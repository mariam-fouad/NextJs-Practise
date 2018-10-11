import React from 'react';
import Router from 'next/router';
const indexAuthPage = ()=>{
    return (
        <React.Fragment>
            <h1>This is the auth main page</h1>
            <button onClick={()=>{Router.push("/")}}>Go to the root</button>
        </React.Fragment>
        
    );
};

export default indexAuthPage;