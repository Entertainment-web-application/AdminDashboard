import React, { useState } from 'react';
import "./Posts.css";

import ViewPostModal from "../../../components/ViewPostModal";
import { useHttpClient } from '../../../hooks/http-hook';

export default function AddedServices({ posts, fetchPosts }) {

    const [open, setOpen] = useState(false);
    const [comments, setComments] = useState([]);
    const { sendRequest } = useHttpClient();

    const getPostComments = async (postId) => {
      try {
        let responseData = await sendRequest(`http://localhost:3500/admin/get-post-comments/${postId}`);
        if(responseData) {
          setComments(responseData);
          setOpen(true);
        }
      } catch(err) {
        console.log(err);
      }
    }

    const handleClose = () => setOpen(false);

    const deleteComment = async (commentId) => {
        try {
          let responseData = await sendRequest(
            `http://localhost:3500/admin/delete-comment/${commentId}`,
            "DELETE"
          );
          
          if(responseData) fetchPosts();
        } catch (err) {
          console.log(err);
        }
      };

  return (
    <>
     <div className='title-container'>
    <h4 className='fw-bold'>All Posts</h4>
  </div>
  
    <div className='added-services__container'>
     
        {posts.length > 0 && posts.filter(post => post.status == 'confirmed').map(item => <div key={item.id} className='post-card'>
        {open && <ViewPostModal open={open} close={handleClose} post={item} comments={comments} deleteComment={deleteComment} />}
          <h1>{item.title}</h1>
          <p >{item.description} </p>
          <h3>{item.user_name}</h3>
          <br/>
          <button class="btn btn-sm mb-0" onClick={() => getPostComments(item.id)}>View Post</button>
          <br />
        </div>)}
    </div>
    </>
  )
}


