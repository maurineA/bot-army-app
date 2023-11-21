// BotSpecs.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BotSpecs = () => {
  const { botId } = useParams();
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
          <h3>{botDetails.name}</h3>
          <p>{botDetails.description}</p>
          <p>Health: {botDetails.health}</p>
          <p>Damage: {botDetails.damage}</p>
          <p>Armor: {botDetails.armor}</p>
          <p>Class: {botDetails.bot_class}</p>
          <img src={botDetails.avatar_url} alt={`${botDetails.name} Avatar`} />
        </div>
      )}
    </div>
  );
};

export default BotSpecs;
