import React from 'react'
import './NewPokemon.css'

export function NewPokemon() {
    const [input, setInput] = React.useState({
       PokeName: '',
       Hp: '',
       Strength: '',
       Defense: '',
       Speed: '',
       Heigth: '',
       Weigth: '',
 
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
      
    
    
        return (
          <form onSubmit={input.handleSubmit}>
            <div>
              <label>PokeName:</label>
              <input className={errors.PokeName && 'danger'} type="text" name="PokeName" onChange={handleInputChange} value={input.PokeName} />
              {errors.PokeName && (
          <p className="danger">{errors.PokeName}</p>
        )}
              <div>
              <label>Hp:</label>
              <input className={errors.Hp && 'danger'} type="number" name="Hp" onChange={handleInputChange} value={input.Hp} />
              {errors.Hp && (
          <p className="danger">{errors.Hp}</p>
        )}
         <div>
              <label>Strength:</label>
              <input className={errors.Strength && 'danger'} type="number" name="Strength" onChange={handleInputChange} value={input.Strength} />
              {errors.Strength && (
          <p className="danger">{errors.Strength}</p>
        )}
         <div>
              <label>Defense:</label>
              <input className={errors.Defense && 'danger'} type="number" name="Defense" onChange={handleInputChange} value={input.Defense} />
              {errors.Defense && (
          <p className="danger">{errors.Defense}</p>
        )}
         <div>
              <label>Speed:</label>
              <input className={errors.Speed && 'danger'} type="number" name="Speed" onChange={handleInputChange} value={input.Speed} />
              {errors.Speed && (
          <p className="danger">{errors.Speed}</p>
        )}
         <div>
              <label>Heigth:</label>
              <input className={errors.Heigth && 'danger'} type="number" name="Heigth" onChange={handleInputChange} value={input.Heigth} />
              {errors.Heigth && (
          <p className="danger">{errors.Heigth}</p>
        )}
         <div>
              <label>Weigth:</label>
              <input className={errors.Weigth && 'danger'} type="number" name="Weigth" onChange={handleInputChange} value={input.Weigth} />
              {errors.Weigth && (
          <p className="danger">{errors.Weigth}</p>
        )}
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
          </form>
        )
}

export function validate(input) {
    let errors = {};
    if (!input.PokeName) {
      errors.PokeName = 'PokeName is required';
    } else if (!/\S+@\S+\.\S+/.test(input.PokeName)) {
      errors.PokeName = 'PokeName must be a text string';
    }
    
    return errors;
  };