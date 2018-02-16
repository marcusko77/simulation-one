import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Home from './Home';

export default class Shelf extends Component {
constructor() {
    super()

    this.state = {
        bins:[1, 2, 3, 4, 5],
    }
}

render() {
    let bins = this.state.bins.map((e,i) => <Link key={i} to={`/Bin/${e.letter}`}><h3>{`Bin ${e}`}</h3></Link> )
    
    return(
        <div>
            <div>
                <span><Link to='/' className= "title" ><h3>picture</h3></Link></span>
                <span>Shelf {this.props.match.params.letter}</span>
            </div>

             <div className = "shelfContainer">
                <span>{ bins }</span>
             </div>
        </div>
    )
}


}