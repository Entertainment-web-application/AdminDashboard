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

    // const confirmService = async (serviceId, email) => {
    //     let subject = "Service confirmed.";
    //     let body = "Service has been confirmed.";

    //     try {
    //       let responseData = await sendRequest(
    //         `http://localhost:5000/api/admin/confirm-service/${serviceId}`,
    //         "PATCH"
    //       );
          
    //       if(responseData) fetchAllServices();
    //       window.open(`mailto:${email}?subject=${subject}&body=${body}`);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };

  return (
    <div className='added-services__container'>
        <h4 className='fw-bold'>All Posts</h4>
        {posts.length > 0 && posts.filter(post => post.status == 'confirmed').map(item => <div key={item.id} className='post-card'>
        {open && <ViewPostModal open={open} close={handleClose} post={item} comments={comments} deleteComment={deleteComment} />}
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <small>{item.user_name}</small>
          <button className='btn btn-primary' onClick={() => getPostComments(item.id)}>View Post</button>
        </div>)}
    </div>
  )
}


{/* <>
                <IconButton onClick={() => deleteService(params.row.id, params.row.email)}>
                  <DeleteOutlineIcon sx={{ color: "red" }} />
                </IconButton>
                {params.row.status !== 'confirmed' && <IconButton onClick={() => confirmService(params.row.id, params.row.email)}>
                  <CheckCircleIcon sx={{ color: "green" }} />
                </IconButton>}
              </> */}