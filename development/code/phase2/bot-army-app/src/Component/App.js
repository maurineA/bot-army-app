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

  const releaseBot = (bot) => {
   
    setTimeout(() => {
      console.log(`Bot ${bot.name} deleted from the backend`);
    }, 1000);

  

 
    const updatedBots = enlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id);
    setEnlistedBots(updatedBots);
  };

  return (
    <div className="App">
      <BotCollection onEnlist={enlistBot} />
      <YourBotArmy enlistedBots={enlistedBots} onRelease={releaseBot} />
      
      
     
    </div>
  );
}


export default App;
