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
      <Dialog
        fullScreen={fullScreen}
        open={props.open}
        onClose={props.close}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {`${props.post.user_name} - ${props.post.title}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{props.post.description}</DialogContentText>
          <hr />
          <div className="comments-list">
            {props.comments.length > 0 &&
              props.comments
                .filter((comment) => !comment.deleted)
                .map((comment) => (
                  <div key={comment.id} className="comment-item">
                    <h5>Added by: {comment.user_name}</h5>
                    <p>{comment.comment}</p>
                    <IconButton
                      className="delete-btn"
                      onClick={() => props.deleteComment(comment.id)}
                    >
                      <DeleteOutlineIcon sx={{ color: "red" }} />
                    </IconButton>
                  </div>
                ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => props.delete(props.id)}
            autoFocus
            sx={{ color: "red" }}
          >
            Delete anyway
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
