import React from 'react';
import { useForm } from "react-hook-form";

import { Botao } from '../../components/botao';
import { Input, Formulario, Select } from '../../components/formulario';

export default function Produtos() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        localStorage.setItem("produtos", JSON.stringify(data))
        window.location.reload();
    }

    return ( 
        <>
            <h1>Produtos</h1>

            <Formulario onSubmit={handleSubmit(onSubmit)} >
                <Select name="tipo" required >
                    <option value="C">Categoria</option>
                    <option value="roupas"  {...register("roupas")}>Roupas</option>
                    <option value="bolsas"  {...register("bolsas")}>Bolsas</option>
                    <option value="acessórios"  {...register("acessórios")}>Acessórios</option>
                </Select>
                <Input type="text" placeholder="Nome" {...register("nome")}/>
                <Input type="number" placeholder="Quantidade" {...register("quantidade")}/>
                <Input type="number" placeholder="Valor" {...register("valor")}/>
                <Botao type="submit">Cadastrar</Botao> 
            </Formulario>

            
        </>
    )
}
