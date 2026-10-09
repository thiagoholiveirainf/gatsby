import * as React from 'react';

export default function Teste(props) {
    return (
        <div style={{backgroundColor: "lightblue", margin: "10px", padding: "5px", width: "500px"}}>
            <h1>Bem vindo, {props.nome}!</h1>
        </div>
    )
}