import React from "react";

const Loader = (props) => {
  return (
      <div className="ui active dimmer">
          <div className="ui big text loader">{props.message}</div>
      </div>
  )
};

Loader.defaultProps = {  //Isto serve para que, caso não coloque uma mensagem personalizado, o Loader tenha sempre uma mensagem predefinida que diz "Loading..."
    message:"Loading..."
};

export default Loader;