import React from "react";
import Pokemon from "../../components/pokemon";
import DATA from "../../assets/pokemon";
import Header from "../../components/header";

export default class Home extends React.Component {
    constructor (props) {
        super(props)
        this.state = {pokemons: [], loading: false, showButton: true}
    }

    handleChange = (evt) => {
        const text = evt.target.value
        const filterData = DATA.filter((pokemon) => {
            return pokemon.name.english.toLowerCase().includes(text.toLowerCase())
        })
        this.setState({pokemons: filterData})
    }

    getData = () => {
        this.setState({showButton: false, loading: true})
        setTimeout(() => {
            this.setState({pokemons: DATA, loading: false, showButton: false})
        }, 3000)
    }
    render() {
        return (
            <>
                <Header title="Pokedex" />
                {!this.state.showButton && !this.state.loading &&<input type="text" onChange={this.handleChange} />}
                <div className="container-pokemon">
                    {this.state.showButton && <button onClick={this.getData}>Buscar DATA</button>}
                    {this.state.loading && "Loading..."}
                    {!this.state.loading &&
                    this.state.pokemons.map((item) => (
                        <Pokemon
                            key={item.id}
                            name= {item.name.english}
                            photo= {item.image}
                            types= {item.type}
                            hp={item.base.HP}
                            attack={item.base.Attack}
                            defense={item.base.Defense}
                        />
                    ))}

                </div>
            </>
        )
    }
}