import React,{Component} from 'react';
import Link from 'next/link';

class IndexPage extends Component{
    render(){
        return (
            <React.Fragment>
                <h1>This is the main page</h1>
                <p>Go to <Link href="/auth"><a>Auth Page</a></Link></p>
            </React.Fragment>
            
        );
    }
    
};

export default IndexPage;