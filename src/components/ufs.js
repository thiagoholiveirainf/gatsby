import * as React from 'react';
import {useEffect} from "react";

export default function Ufs({setOpcaoUf}) {

    const urlData = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';

    const [options, setOptions] = React.useState([]);

    useEffect(() => {
        const opt = [{key: "", value: "Selecione ..."}]
        fetch(urlData)
            .then(results => results.json())
            .then(data => {
                data.forEach((uf) => {
                    opt.push({key: uf.id, value: uf.nome});
                });
                setOptions(opt);
            })
    }, [])

    function handleChange(event) {
        setOpcaoUf({
            key: event.target.value,
            value: event.target[event.target.selectedIndex].text
        });
    }

    return (
        <select name="ufs" onChange={handleChange}>
            {options.map((item) => {
                return (
                    <option key={item.key} value={item.key}>{item.value}</option>
                )
            })}
        </select>
    )
}