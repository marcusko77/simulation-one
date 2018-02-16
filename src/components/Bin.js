import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Shelf from './Shelf.js'


export default class Bin extends Component{
    constructor(){
        super()

        this.setState={


        }
    }

    render(){
        return(
            <div>
            <div>
            <span><Link to='/' className= "title" ><h3>picture</h3></Link></span>
                <span><Link to='/shelf/:letter' classname= "shelf">Shelf {this.props.match.params.letter}</Link></span>
                <span></span>
            </div>
            <div>
                <div>
                    <h3>Name</h3>
                    <input />
                    <h3>Price</h3>
                    <input />
                </div>
                <div>
                    <button>Edit</button>
                </div>

            </div>
            </div>

        )
    }
}