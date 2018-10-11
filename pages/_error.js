import React from 'react';
import Link from 'next/link';

const errorPage = ()=>{
    return (
        <React.Fragment>
            <h1>Oops, something went wrong.</h1>
            <p> Try going back to <Link href="/"><a>root Page</a></Link></p>
        </React.Fragment>
        
    );
};

export default errorPage;