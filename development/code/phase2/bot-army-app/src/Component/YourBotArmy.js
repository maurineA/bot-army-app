// YourBotArmy.js
import React from 'react';

const YourBotArmy = ({ enlistedBots }) => {
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
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourBotArmy;
