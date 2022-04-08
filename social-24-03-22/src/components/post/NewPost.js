import React from "react";

import { UserContext } from "../../auth";
import { ADD_POST } from "../../graphql/post/mutation";
import { useMutation } from "@apollo/client";

export default function NewPost({isNewPost}) {
    const [text, setText] = React.useState("");
    const {currentUser} = React.useContext(UserContext)
    const [addPost] = useMutation(ADD_POST);
    
    const image = React.useRef();
    
    if(isNewPost){
        if(!document.getElementById('newPost').classList.contains('show'))
            new window.bootstrap.Modal(document.getElementById('newPost')).show();
    }

    async function uploadImage(imagem){
        const formData = new FormData();
        formData.append('file', imagem);
        formData.append('upload_preset', 'senacgram');
        formData.append('cloud_name', 'whoislvcxs');
        const response = await fetch('http://api.cloudinary.com/v1_1/whoislvcxs/image/upload', {
            method: 'POST',
            accept: 'application/json',
            body: formData
        });
        const bodyJson = await response.json();
        return bodyJson.url;
    }

    async function handleNewPost(){
        let url = await uploadImage(image.current.files[0])
        const newPost = {
            text: text,
            image: url,
            user_id : currentUser.id
        }
        addPost({variables:{
            image: newPost.image,
            text: newPost.text,
            userId: newPost.user_id
        }})
        console.log(newPost)
    }
    return (
        <div className="modal" id="newPost" tabIndex="-1">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Criar um post</h5>
                    </div>
                    <div className="modal-body">
                        <input type="text" placeholder="Digite um texto" className='form-control my-2' value={text} onChange={(event)=>setText(event.target.value)}/>
                        <input type="file" className="form-control my-2" ref={image}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleNewPost}>Postar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}