import React from "react";
import Layout from '../shared/layout'


export default function NotFoundPage(){
    return (<Layout title="Erro 404">
                <p className="h5 text-center">Não encontrado...</p>
                <p className="text-center">Não encontramos nada bro</p>
            </Layout>)
};