import React, { lazy } from "react";
import Layout from "../shared/layout";
import { useMutation } from "@apollo/client";
import { Link } from 'react-router-dom'

import { UserContext } from "../auth";
import { ADD_USER } from "../graphQL/login/mutation";

import { useNavigate } from "react-router-dom";

export default function RegisterPage(){
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [nome, setName] = React.useState('');
    const { setCurrentUser } = React.useContext(UserContext);
    const [ addLogin ] = useMutation(ADD_USER);
    
    //const [loadLogin] = useLazyQuery(GET_LOGIN);

    const navigate = useNavigate();

    function handleLogin(){
        addLogin({ variables: {username, password: btoa(password), nome}})
        .then((ret)=>{
            let { id, nome, username } = ret.data.insert_user.returning[0];
            setCurrentUser({ id, nome, username});
            navigate('/')
        })
    };

    return(
        <Layout title="Login">
            <div className="row">
                <div className="col-6 d-none d-lg-block text-end">
                    <img src="image/iphone.png" alt="iphone"/>
                </div>
                <div className="col-lg-4 col-10 mx-auto">
                    <div className="border rounded-1 p-5 my-3 mx-auto" style={{'maxwidth': '430px', 'minwidth': '430px'}}>
                        <h2 className="mb-5 text-center fw-bold" style={{'fontSize': '50px', 'fontFamily': "'Cookie' , 'cursive'"}}>Senacgram</h2>
                        <input type="text" className="form-control mb-3" placeholder="Nome" value={nome} onChange={(event) => setName(event.target.value)}/>
                        <input type="text" className="form-control mb-3" placeholder="Usuário" value={username} onChange={(event) => setUsername(event.target.value)}/>
                        <input type="password" className="form-control mb-3" placeholder="Senha" value={password} onChange={(event) => setPassword(event.target.value)}/>
                        <button className="btn btn-primary w-100" onClick={handleLogin}>Registrar-se</button>
                        <div className="text-center">
                            <p>Já tem uma conta ? <Link to="/login"> Login</Link></p>
                        </div>
                        
                    </div>
                    <div>
                        <p className="text-center">Obetenha o aplicativo</p>
                        <div className="row justify-content-center">
                            <img src="./image/google.png" alt='goole' style={{'width': '160px', 'height': '45px'}}/>
                            <img src="./image/apple.png" alt='apple' style={{'width': '160px', 'height': '45px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}