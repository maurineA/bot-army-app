// YourBotArmy.js
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

const BotDetails = ({ botId }) => {
  const [botDetails, setBotDetails] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/bots/${botId}`)
      .then((res) => res.json())
      .then((data) => {
        setBotDetails(data);
      });
  }, [botId]);

  return (
    <div>
      {botDetails && (
        <div>
          <h2>{botDetails.name} Details</h2>
          {/* Display other details as needed */}
          <p>Health: {botDetails.health}</p>
          <p>Damage: {botDetails.damage}</p>
          <p>Armor: {botDetails.armor}</p>
          <p>Class: {botDetails.bot_class}</p>
        </div>
      )}
    </div>
  );
};

const YourBotArmy = ({ enlistedBots, onEnlist, onRelease, onDischarge }) => {
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
              X
            </button>

            {/* Route for displaying detailed bot information */}
            <Route path="/bot-specs/:botId">
              <BotDetails />
            </Route>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourBotArmy;
