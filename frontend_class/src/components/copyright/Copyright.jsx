import { Component } from 'react';
import './Copyright.css';

export default class Copyright extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div className='footer'>
            <h4 className='copyright'>copyright 2022 - Red Chilli | Delhi</h4>
        </div>
    );
    }
    
}
 