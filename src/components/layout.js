import * as React from "react";

export default function Layout({titulo, children}) {
    return (
        <div>
            <hr />
            <p>Cabeçalho</p>
            <nav>
                <ul>
                    <li>Início</li>
                    <li>Sobre</li>
                    <li>Produtos</li>
                </ul>
            </nav>
            <hr />
            <main>
                <h1>{titulo}</h1>
                {children}
            </main>
            <hr />
            <p>Rodapé</p>
            <hr />
        </div>
    );
}