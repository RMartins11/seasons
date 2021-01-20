import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";



class App extends React.Component {
 
  constructor(props) {
    super(props);

      this.state = { latitude: null, errorMessage: ""}; //IMPORTANTE: Dentro do constructor, como neste exemplo, é a UNICA VEZ em que damos um state direto, através do this.state; Para atualizar, utilizamos this.setState como no exemplo abaixo

      
     }

     componentDidMount()  { //Todos os dados que estão abaixo, podiam ser colocados dentro do constructor, no entanto, criamos um novo component chamado componentDidMount, que se inicializa quando o constructor se inicializa. Utilizamos esta técnica de modo a organizar melhor o código
        window.navigator.geolocation.getCurrentPosition(
            (position) => { //isto é chamado de callback function
                this.setState({ latitude: position.coords.latitude}) //Aqui chamamos setState para atualizar o State da função
            },
            (err) => {
                this.setState({errorMessage: err.message})
            },
          )
     };

     renderContent () {  //Inicialmente, o conteudo abaixo estava inserido dentro do render. Este content foi criado, de modo a simplificar o render, e, para caso seja necessário acrescentar algo ao render, este processo se torne mais fácil

      if (this.state.errorMessage && !this.state.latitude) { //Esta expressão diz: Se tiver errorMessage E se NÂO receber latitude, mostrar:
        return <div>Error: {this.state.errorMessage}</div>
      }

      if (!this.state.errorMessage  && this.state.latitude) {  //Esta expressão diz: Se NÂO tiver errorMessage E se tiver latitude, mostrar:
        return <SeasonDisplay latitude= {this.state.latitude}/> //Neste caso, utilizamos o state da App, como props na SeasonDisplay. Deste modo, a SeasonDisplay vai atualizar sempre que o setState for invocado
      }

      return <Loader message="Please accept location request"/>;  //Esta expressão serve, caso nenhuma das condições acima se aplique. Tem o mesmo propósito de "Else", sendo que o mesmo não é necessário

     }

     render() {
    
     return <div> {this.renderContent()} </div>
 }
};


ReactDOM.render(<App />, document.querySelector("#root"));