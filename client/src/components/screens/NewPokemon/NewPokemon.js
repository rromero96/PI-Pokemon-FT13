import React from 'react'
import './NewPokemon.css'
/* import { connect } from 'react-redux'; */
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { newPokemon, getTypes } from '../../../Redux/Actions/index.js'

export function NewPokemon() {

    const pokemonCreated = useSelector(state => state.pokemonCreated)
    const pokemonTypes = useSelector(state => state.pokemonTypes)

    const dispatch = useDispatch();

    useEffect(() =>{
      dispatch(getTypes());
  },[dispatch])

    const [input, setInput] = React.useState({
       name: '',
       hp: '',
       strength: '',
       defense: '',
       speed: '',
       height: '', 
       weight: '',
 
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
        setInput('');
        
      }
      
    
      
      return (
        <form onSubmit={handleSubmit}>
            <div>
              <label>PokeName:</label>
              <input className={errors.PokeName && 'danger'} type="text" name="name" onChange={handleInputChange} value={input.name} />
              {errors.name && (
                <p className="danger">{errors.name}</p>
                )}
               
              <div>
              <label>Hp:</label>
              <input className={errors.hp && 'danger'} type="number" name="hp" onChange={handleInputChange} value={input.hp} />
            
         <div>
              <label>Strength:</label>
              <input className={errors.strength && 'danger'} type="number" name="strength" onChange={handleInputChange} value={input.strength} />
              
         <div>
              <label>Defense:</label>
              <input className={errors.defense && 'danger'} type="number" name="defense" onChange={handleInputChange} value={input.defense} />
             
         <div>
              <label>Speed:</label>
              <input className={errors.speed && 'danger'} type="number" name="speed" onChange={handleInputChange} value={input.speed} />
              
         <div>
              <label>Height:</label>
              <input className={errors.heigth && 'danger'} type="number" name="height" onChange={handleInputChange} value={input.height} />
            
         <div>
              <label>Weight:</label>
              <input className={errors.weigth && 'danger'} type="number" name="weight" onChange={handleInputChange} value={input.weight} />
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            {/* <button type="submit">CREATE</button> */}
            <button onClick={()=>dispatch(newPokemon(input))}>CREATE</button>
          </form>
        )
} 

 export function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = 'PokeName is required';
    } else if (!/^[A-Za-z]+$/.test(input.name)) {
      errors.name = 'PokeName must be a text string';
    }
    return errors;
};

/*function mapDispatchToProps(dispatch) {
  return {
    newPokemon: pokemon => dispatch(newPokemon(pokemon))
  }
} */

/* function mapStateToProps(){} */


/* export default connect(null, mapDispatchToProps)(NewPokemon); */

export default NewPokemon;