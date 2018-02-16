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
        
        let shelves = this.state.shelves.map((e,i) => <Link key={i} to={`/Bin/${e.id}`}><h3>{`Shelf ${e}`}</h3></Link> )
    
        return(
        <div className='HomeContainer'>
            <span>
               { shelves }
            </span>
        
        </div>
    )
}
}
