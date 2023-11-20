// BotCollection.js
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';


const BotCollection = ({onEnlist}) => {
    
        const [bots, setBots] = useState([]);
      
      
        useEffect(() =>{
          fetch('http://localhost:3000/bots')
          .then((res)=>res.json())
          .then(data =>{
            setBots(data)
          })
        },[])
        

  return (
    
    <div>
      <h2>Bot Collection</h2>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <h3>{bot.name}</h3>
            <p>{bot.description}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <img src={bot.avatar_url} alt={`${bot.name} Avatar`} />
            {/* <Link to={`/bot-specs/${bot.id}`}>
              <button>View Details</button>
            </Link> */}
            <button onClick={() => onEnlist(bot)}>Enlist</button>
         

           
            {/* <button onClick={() => enlistBot(bot)}>Enlist Bot</button> */}
           
          </li>
        ))}
      </ul>
      
    </div>
    
  );
};

export default BotCollection;
