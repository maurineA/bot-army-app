// App.js
import { useState } from 'react';
import React from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';


function App() {
  const [enlistedBots, setEnlistedBots] = useState([]);
  

  const enlistBot = (bot) => {
    if (!enlistedBots.find((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };
  return (
    <div className="App">
      <BotCollection onEnlist={enlistBot} />
      <YourBotArmy enlistedBots={enlistedBots} />
      
     
    </div>
  );
}

export default App;
