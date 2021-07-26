import React from 'react';
import { useForm } from "react-hook-form";

import { Botao } from '../../components/botao';
import { Input, Formulario } from '../../components/formulario';

export default function Clientes() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        localStorage.setItem("user", JSON.stringify(data))
        window.location.reload();
    }

    return ( 
        <>
            <h1>Clientes</h1>

            <Formulario onSubmit={handleSubmit(onSubmit)} >
                <Input type="text" placeholder="Nome" {...register("nome")}/>
                <Input type="email" placeholder="Email" {...register("email")}/>
                <Input type="tel" placeholder="Telefone" {...register("telefone")}/>
                <Input type="text" placeholder="CPF" {...register("cpf")}/>
                <Input type="text" placeholder="Endereço" {...register("endereço")}/>

                <Botao type="submit">Cadastro</Botao>
            </Formulario>

            
        </>
    )
}
