import React from "react";
import PropTypes from "prop-types"
import { handleGenerateBg } from "../../utils";

export default class Pokemon extends React.Component {

    render() {
        const typePokemon = handleGenerateBg(this.props.types[0])
        return (
            <div className="pokemon" style={{ backgroundColor: typePokemon }}>
                {
                    this.props.photo ? (<img className="pokemon-image"
                    src={this.props.photo}
                    alt={`pokemon ${this.props.name}`}>
                </img> ) : (
                        <img className="pokemon-image" src="https://www.purarteadesivos.com.br/wp-content/uploads/2017/04/adesivo-personalizado-pokebola-pokemon-recorte-eletronico-geek-nerd-gamer-pura-arte-adesivos.png" />
                    )
                }
                <h2>{this.props.name}</h2>
                <ul className="ul">
                    <li>HP: {this.props.hp}</li>
                    <li>Attack: {this.props.attack}</li>
                    <li>Defense: {this.props.defense}</li>
                </ul>
                <div>
                    <span>{this.props.types.join(" ")}</span>
                </div>
            </div>
        )
    }

}

Pokemon.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string,
    hp: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    defense: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.string)
}