import React from 'react'
import './NewPokemon.css'
/* import { connect } from 'react-redux'; */
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { newPokemon, getTypes, getPokemons } from '../../../Redux/Actions/index.js'

export function NewPokemon() {

    /* const pokemonCreated = useSelector(state => state.pokemonCreated) */
    const pokemonTypes = useSelector(state => state.pokemonTypes)

    const dispatch = useDispatch();

    useEffect(() =>{
      dispatch(getTypes());
      dispatch(getPokemons());
  },[dispatch])

    const [input, setInput] = React.useState({
       name: '',
       hp: '',
       attack: '',
       defense: '',
       speed: '',
       height: '', 
       weight: '',
       type1: '',
       type2: ''
 
      });
     
      const [errors, setErrors] = React.useState({});
    
      const handleInputChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
        setErrors(validate({
          ...input,
          [e.target.name]: e.target.value
        }));
      }

      const handleSubmit = function(e) {
        e.preventDefault();
        newPokemon(input);
        console.log(input)
        setInput({
          name: '',
          hp: '',
          attack: '',
          defense: '',
          speed: '',
          height: '', 
          weight: '',
          type1: '',
          type2: ''
        });
        
      }
      
    
      
      return (
        <div className="forma">
        <img className="foto" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg" alt="foto poke"/>
        <form className='tabla' onSubmit={handleSubmit}>
            <div>
              <label>PokeName:</label>
              <input className={errors.PokeName && 'danger'} type="text" name="name" onChange={handleInputChange} value={input.name} key={input.name} />
              {errors.name && (
                <p className="danger">{errors.name}</p>
                )}
               
              <div>
              <label>Hp:</label>
              <input className={errors.hp && 'danger'} type="number" name="hp" onChange={handleInputChange} value={input.hp} key={input.name} placeholder='0 - 255'/>
              {errors.hp && (
              <p className="danger">{errors.hp}</p>
              )}
            
         <div>
              <label>Attack:</label>
              <input className={errors.attack && 'danger'} type="number" name="attack" onChange={handleInputChange} value={input.attack} key={input.name}placeholder='0 - 255'/>
              {errors.attack && (
              <p className="danger">{errors.attack}</p>
              )}
              
         <div>
              <label>Defense:</label>
              <input className={errors.defense && 'danger'} type="number" name="defense" onChange={handleInputChange} key={input.name}value={input.defense}placeholder='0 - 255' />
              {errors.defense && (
              <p className="danger">{errors.defense}</p>
              )}
             
         <div>
              <label>Speed:</label>
              <input className={errors.speed && 'danger'} type="number" name="speed" onChange={handleInputChange} value={input.speed} key={input.name}placeholder='0 - 255'/>
              {errors.speed && (
              <p className="danger">{errors.speed}</p>
              )}
              
         <div>
              <label>Height:</label>
              <input className={errors.heigth && 'danger'} type="number" name="height" onChange={handleInputChange} value={input.height}key={input.name} placeholder='0 - 255' />
              {errors.height && (
              <p className="danger">{errors.height}</p>
              )}
            
         <div>
              <label>Weight:</label>
              <input className={errors.weigth && 'danger'} type="number" name="weight" onChange={handleInputChange} value={input.weight} key={input.name}placeholder='0 - 255'/>
              {errors.weight && (
              <p className="danger">{errors.weight}</p>
              )}
              <br/>
              <span>Type-1</span>
              <select className={errors.type1 && "type1"} name="type1" value={input.id} onChange={handleInputChange}>
                    <option value='null'>null</option>
                    {pokemonTypes && pokemonTypes.map(c => (
                    <option value={c.id} key={c.id} name="c.name">{c.name}</option>
                    ))}
                    {errors.type1 && (
                    <p className="tipe1">{errors.type1}</p>
                    )}
                </select>
                <br/>
              <span>Type-2</span>
                <select className="type2" name="type2" value={input.id} onChange={handleInputChange}>
                    <option value='null'>null</option>
                    {pokemonTypes && pokemonTypes.map(c => (
                    <option value={c.id} key={c.id} name="c.name">{c.name}</option>
                    ))}
                </select>  
            </div>
            </div>  
            </div>
            </div>
            </div>
            </div>
            </div>
            <button className="btn1" onClick={()=>dispatch(newPokemon(input))}>CREATE</button>
          </form>
          </div>
        )
} 

 export function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'PokeName is required';
    } else if (!/^[A-Za-z]+$/.test(input.name)) {
      errors.name = 'PokeName must be a text string';
    }
    if (!input.hp) {
      errors.hp = 'Hp is required';
    } else if (!/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.hp)) {
      errors.hp = 'Hp must be between 1 and 255';
    }
    if (!input.attack) {
      errors.attack = 'Attack is required';
    } else if (!/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.attack)) {
      errors.attack = 'Attack must be between 1 and 255';
    }
    if (!input.defense) {
      errors.defense = 'Defense is required';
    } else if (!/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.defense)) {
      errors.defense = 'Defense must be between 1 and 255';
    }
    if (!input.speed) {
      errors.speed = 'Speed is required';
    } else if (!/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.speed)) {
      errors.speed = 'Speed must be between 1 and 255';
    }
    if (!input.height) {
      errors.height = 'Heigth is required';
    } else if (!/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.height)) {
      errors.height = 'Heigth must be between 1 and 255';
    }
    if (!input.weight) {
      errors.weight = 'Weigth is required';
    } else if (!/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.weight)) {
      errors.weight = 'Weigth must be between 1 and 255';
    }
    if (!input.type1 || input.type1 === "null") {
      errors.type1 = 'Type can not be null';
    } 
    return errors;
};

export default NewPokemon;


