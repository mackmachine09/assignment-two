import React,{useState} from "react";
import { Card } from "./Card";
import './Cards.css';

const Cards=()=>{
    const [card,setcard] = useState(example_card)

    return(
        <div>
            <div className='cards'>
                {example_card.map((card)=>{return <Card key={card.channelname} channel={card.channelname} img={card.image} rating={card.rating} popularity={card.popularity_rank}/>})}
            </div>
        </div>
    )
}

const example_card = [
    {
        channelname:'The Joe Rogan Experience',
        image:'../Assets/Joe-rogan.jpeg',
        rating:'7.13',
        popularity_rank:'1'
    },
    {
        channelname:'The Trash Taste Podast',
        image:'../Assets/Trash-Taste.png',
        rating:'9.91',
        popularity_rank:'4'
    },
    {
        channelname:'Serial',
        image:'../Assets/Serial.jpeg',
        rating:'8.83',
        popularity_rank:'2'
    },
    {
        channelname:'Entrepreneurs on Fire',
        image:'../Assets/EOF_logo.jpg',
        rating:'3.66',
        popularity_rank:'3'
    }
]

export default Cards