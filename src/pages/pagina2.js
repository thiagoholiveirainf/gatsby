import * as React from 'react';
import {useEffect, useState} from 'react';
import Layout from "../components/layout";
import Ufs from "../components/ufs";
import Municipios from "../components/municipios";

export default function Pagina2() {

    const [opcaoUf, setOpcaoUf] = useState({key: "", value: ""});
    const [opcaoMunicipio, setOpcaoMunicipio] = useState({key: "", value: "", uf: ""});

    useEffect(() => {
        if (opcaoUf.value.length > 0) {
            setOpcaoMunicipio({ ...opcaoMunicipio, uf: opcaoUf.key });
        }
    }, [opcaoUf]);

    return (
        <Layout>
            <h3>Dados Externos</h3>
            <p>Unidades de federação:</p>
            <Ufs setOpcaoUf={setOpcaoUf}></Ufs>
            <p>Municípios do Estado: <b>{opcaoUf.value}</b></p>
            <Municipios uf={opcaoUf.key} setOpcaoMunicipio={setOpcaoMunicipio} />
        </Layout>
    );
}