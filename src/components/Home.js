import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Home extends Component  {
    constructor(){
        super()
        this.state = {
            shelves:['A', 'B', 'C', 'D']
        }
    }
    render(){
        
        let shelves = this.state.shelves.map((e,i) => <Link key={i} to={`/shelf/${e}`}><h3>{`Shelf ${e}`}</h3></Link> )
    
        return(
            <div>
            <div>
            <Link to='/' className= "title" ><h1>Shelfie</h1></Link>
            </div>
        <div className='HomeContainer'>
            <span>
               { shelves }
            </span>   
        
        </div>
        </div>
    )
}
}
