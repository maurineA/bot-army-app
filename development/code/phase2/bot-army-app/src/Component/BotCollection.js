import React from "react";

const BotsCollection = ({enlistBot}) => {
 
  
  }

  return (
    <div>
        <SortBar />
        {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} enlistBot={enlistBot} />
      ))}
    </div>
  );


export default BotsCollection;
