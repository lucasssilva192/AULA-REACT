import React from 'react';
import { UserContext } from '../../auth'
import { useMutation } from "@apollo/client";
import { ADD_POST } from '../../graphQL/post/mutation';

export default function NewPost({isNewPost}){

    const { currentUser } = React.useContext(UserContext)
    const [text, setText] = React.useState("");
    const image = React.useRef();
    const [ addPost ] = useMutation(ADD_POST);

    if(isNewPost){
        if(!document.getElementById('newPost').classList.contains('show')){
            new window.bootstrap.Modal(document.getElementById('newPost')).show()
        }
        
    }

    

    async function headleNewPost(){
        let url = await uploadImage(image.current.files[0]);
        const newPost ={
            text: text,
            image: url,
            user_id: currentUser.id
        }

        addPost({ variables: {
            image: newPost.image, 
            text: newPost.text , 
            userId: newPost.user_id}});
    };

    async function uploadImage(imagem){
       
        const formData = new FormData();
        formData.append('file', imagem);
        formData.append('upload_preset', 'senacgram');
        formData.append('cloud_name','whoislvcxs');
        const response = await fetch('http://api.cloudinary.com/v1_1/whoislvcxs/image/upload',{
            method: 'POST',
            accept: 'application/json',
            body: formData

        });
        const bodyJson = await response.json();

        return bodyJson.url;
    }
    
    return(
        <div className="modal" tabIndex="-1" id='newPost'>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Criar Post</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <input type="text" placeholder='Digite um texto...' className='form-control my-2' value={text} onChange={(event)=>setText(event.target.value)}/>
                    <input type="file"  className='form-control my-2' ref={image}/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    <button type="button" className="btn btn-primary" onClick={headleNewPost}>Postar</button>
                </div>
                </div>
            </div>
        </div>
    );
};