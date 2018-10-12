import React,{Component} from 'react';
import Link from 'next/link';

class IndexPage extends Component{

    static getInitialProps(context){
        const promise = new Promise ((resolve, reject)=>{
            setTimeout(() => {
                resolve({appName : 'Next js'});
            }, 3000);
        });
        return promise;
      }
    render(){
        return (
            <React.Fragment>
                <h1>This is the main page of {this.props.appName}</h1>
                <p>Go to <Link href="/auth"><a>Auth Page</a></Link></p>
            </React.Fragment>
            
        );
    }
    
};

export default IndexPage;