// src/pages/BotsCollection.js
import React, { useState, useEffect } from 'react';
import BotCard from '../components/BotCard';
import SortBar from '../components/SortBar';

const BotsCollection = ({ enlistBot }) => {


  return (
    <div>
      <SortBar />
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} enlistBot={enlistBot} />
      ))}
    </div>
  );
};

export default BotsCollection;
