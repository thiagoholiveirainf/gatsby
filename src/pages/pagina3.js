import * as React from "react"
import Layout from "../components/layout";
import {graphql, useStaticQuery} from "gatsby";

export default function Pagina3() {

    const data = useStaticQuery(graphql`
        query {
            allUser {
                nodes {
                   id
                   email
                   name
                   website
                }
            }
        }`
    );

    const users = data.allUser.nodes;

    return (
        <Layout>
            <h3>Dados internos</h3>
            <h4>Usuários</h4>
            <table width="900px" border={1} cellSpacing={0}>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Site</th>
                </tr>
                {
                    users.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.website}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </Layout>
    )

}