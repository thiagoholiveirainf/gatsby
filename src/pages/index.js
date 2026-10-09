import * as React from "react";
import {Link} from "gatsby";
import Teste from "../components/teste";
import Layout from "../components/layout";

export default function IndexPage () {
    return (
        <Layout titulo="Home Page">
           <h1>Olá mundo, Gatsby.</h1>
           <p>Iniciando com os primeiros passos dos componentes React no Gatsby.</p>
           <Teste nome="Gatsby!"/>
           <Link to="/about">Sobre</Link>
        </Layout>
    );
}

export const Head = () => <title>Home Page</title>
