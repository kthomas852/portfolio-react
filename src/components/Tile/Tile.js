import React, {useState} from 'react';
import 'tile.css';

export default function Tile(props){
    return(
        <span>
            <div>
                <a href={props.link}><img alt="" src={props.image}/></a>
            </div>
        </span>
    )
}