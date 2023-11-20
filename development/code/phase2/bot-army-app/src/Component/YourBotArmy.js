// YourBotArmy.js
import React from 'react';
import { Link } from 'react-router-dom';
const YourBotArmy = ({ enlistedBots, onEnlist, onRelease, onDischarge  }) => {



  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {enlistedBots.map((bot) => (
          <li key={bot.id}>
            <h3>{bot.name}</h3>
            <p>{bot.description}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <img src={bot.avatar_url} alt={`${bot.name} Avatar`} />
            <Link to={`/bot-specs/${bot.id}`}>
              <button>View Details</button>
            </Link>
             <button onClick={() => onEnlist(bot)}>Enlist</button> 
            <button onClick={() => onRelease(bot)}>Release</button>
            <button onClick={() => onDischarge(bot)} className="red-button">
              x
            </button>
           
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourBotArmy;
