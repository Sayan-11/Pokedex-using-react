import React, { Component } from 'react';
import './Styles/App.css';
import PokeList from './PokeList'
import DetailView from './DetailView'
//import Pokemon from '../Pokemon'

class App extends Component {
  constructor(){
    super()
    this.state={
      id: undefined,
      name: undefined,
      sprite:undefined,
      type: undefined
    };
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick = async(id)=>{
    const api_call = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const data = await api_call.json();
    const pokemon = data
    this.setState({
      id: pokemon.id,
      name: pokemon.name,
      sprite:  pokemon.sprites.front_default,
      type: pokemon.types[0].type.name
    })
  }

  /*handleOnClick(id){
    var request = new Request(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    fetch(request, {mode: 'no-cors'}).then(res=>res.json).then(data=>{
      const pokemon = new Pokemon(data);
      console.log({pokemon})
    }).catch(err=> console.log(err))
  }*/

 /* handleOnClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`, {mode: 'no-cors'}).then((res) => {return res.json()}).then(data => 
    {
        const pokemon = new Pokemon(data);
        console.log(pokemon);
       // this.setState({ pokemon });
       // <DetailView pokemon={this.state.pokemon} />
      }).catch(err => console.log(err));
  }*/

  render() {
    return (
      <div className="App">
       <PokeList handleOnClick={this.handleOnClick}/>
       <DetailView id={this.state.id} name = {this.state.name} sprite= {this.state.sprite} type={this.state.type} />
      </div>
    );
  }
}

export default App;
