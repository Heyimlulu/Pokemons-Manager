import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';
import { useHistory } from 'react-router-dom';

type Props = {
  pokemon: Pokemon,
  borderColor?: string
};

const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor = '#009688'}) => {

    const [color, setColor] = useState<string>();
    const history = useHistory();

    // onMouseEnter Event => Change border color to green (Props?)
    const showBorder = () => {
        setColor(borderColor);
    }

    // onMouseLeave Event => Change border color to default (CSS)
    const hideBorder = () => {
        setColor('#f5f5f5');
    }

    const goToPokemon = (id: number) => {
      history.push(`/pokemons/${id}`)
    }

  return (
    <div className="col s12 m4" onClick={() => goToPokemon(pokemon.id)} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
      <div className="card horizontal" style={{borderColor: color}}>
        <div className="card-image">
          <img src={pokemon.picture} alt={pokemon.name}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            {pokemon.types.map(type => (
                <span className={formatType(type)} key={pokemon.id}>{type}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
