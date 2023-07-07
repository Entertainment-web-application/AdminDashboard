import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import "./ViewPostModal.css";

export default function ViewPostModal(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
     
<div>
  <Dialog
    fullScreen={fullScreen}
    open={props.open}
    onClose={props.close}
    aria-labelledby="responsive-dialog-title"
    maxWidth="sm"
    fullWidth
  >
    <DialogTitle id="responsive-dialog-title" sx={{ borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
      <span style={{ color: '#777', fontSize: '0.8rem', textTransform: 'uppercase', marginRight: '0.5rem' }}>{props.post.user_name}</span>
      {props.post.title}
    </DialogTitle>
    <DialogContent>
      <DialogContentText sx={{ marginBottom: '1rem' }}>{props.post.description}</DialogContentText>
      <hr style={{ margin: '1rem 0' }} />
      <div className="comments-list card card-body blur shadow-blur mx-4 mt-n6 overflow-hidde">
        {props.comments.length > 0 &&
          props.comments
            .filter((comment) => !comment.deleted)
            .map((comment) => (
              <div key={comment.id} className="comment-item" sx={{ marginBottom: '1rem', padding: '0.5rem', borderRadius: '6px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)' }}>
                <h5 style={{ marginBottom: '0.5rem' ,color:'#0c0c0c'  }}>Added by: <small  style={{ color:' #666' }} > {comment.user_name} </small></h5>
                <p style={{ margin: 0   ,color:'#0c0c0c'  }}>{comment.comment}</p>
                <IconButton
                  className="delete-btn"
                  onClick={() => props.deleteComment(comment.id)}
                  sx={{ color: 'red', marginLeft: 'auto' }}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </div>
            ))}
      </div>
    </DialogContent>
    <DialogActions sx={{ borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
      <Button 
       className="delete-btn2"
        onClick={() => props.delete(props.id)}
        autoFocus
        sx={{ color: 'red', textTransform: 'none' , fontSize: '17px' }}
      >
        Delete Anyway
      </Button>
    </DialogActions>
  </Dialog>
</div>
</div>
  );
}
