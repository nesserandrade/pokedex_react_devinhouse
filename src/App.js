import React from "react";
import Pokemon from "./components/pokemon";
import DATA from "./assets/pokemon";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title">Pokedex</h1>
                <div className="container-pokemon">

                    {DATA.map((item) => (
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
            </div>
        )
    }
}