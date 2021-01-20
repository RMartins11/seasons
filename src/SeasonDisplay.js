import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
 summer: {
     text: "Let's go to the beach!",
     iconName: "sun"
 },
 winter: {
     text: "It's so cold!",
     iconName: "snowflake"
 }
};

const getSeason = (latitude, month) => {
 if (month > 2 && month < 9) { //Aqui indico que SE o mês estiver entre Março (lembrar que é index 0, logo Janeiro=0) e Outubro:
   return latitude > 0 ? "summer" : "winter"; //Aqui digo que para a pergunta: a latitude é superior a 0 (para estar no hemisfério Norte), terei como resposta "summer" caso a resposta seja Sim, ou "winter" caso seja Não
 } 
 else { //Aqui não preciso de especificar os meses, porque o programa interpreta como sendo os meses restante, fora de 2-9
   return latitude > 0 ? "winter" : "summer"; // Aqui digo que para a pergunta: a latitude é superior a 0 (para estar no hemisfério Norte), terei como resposta "winter" caso a resposta seja Sim, ou "summer" caso seja Não
  }
};

const SeasonDisplay = (props) => {

    const season = getSeason(props.latitude, new Date().getMonth());
    const {text, iconName} = seasonConfig[season]; //Aqui indico que as constantes text e iconName, têm configurações correspondentes com a seasonConfig criada acima
    return (
     <div className={`season-display ${season}`}>
         <i className={`icon-left massive ${iconName} icon`} />
         <h1>{text}</h1>
         <i className={`icon-right massive ${iconName} icon`} />
     </div>
    );
};

export default SeasonDisplay;