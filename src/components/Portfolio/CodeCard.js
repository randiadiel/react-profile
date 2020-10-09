import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { MdClose } from "react-icons/md";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Chip from "@material-ui/core/Chip";
import Grow from "@material-ui/core/Grow";
import Skeleton from '@material-ui/lab/Skeleton'
import "./CodeCard.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: "60vw",
    maxHeight: "90vh",
    overflowY: "auto",
  },
}));

function CodeCard({ name, description, image, link, category }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [onLoad, setOnLoad] = useState(false);
  const classes = useStyles();
  return (
    <>
      <div className="code-card">
      <div className="code-card-image-container">
        <img onLoad={() => {
          setTimeout(() => {
            setOnLoad(!onLoad);
          },7000);
        }} className={`${!onLoad ? "hidden" : "animated fadeIn"} code-card-image`} src={image} alt={name} />
        {!onLoad && <Skeleton className="code-card-skeleton" variant="rect"></Skeleton>}
      </div>
        <div className="code-card-container">
          <Chip
            size="small"
            label={category}
            color={
              category === "Personal"
                ? "secondary"
                : category === "Organization"
                ? "primary"
                : "default"
            }
          ></Chip>
          <h3 className="code-card-title">{name}</h3>
          <Button
            buttonSize="btn--wide"
            buttonColor="blue"
            onClick={() => setIsOpen(!modalIsOpen)}
          >
            See More
          </Button>
        </div>
      </div>

      <Modal
        open={modalIsOpen}
        onClose={() => setIsOpen(!modalIsOpen)}
        aria-labelledby="Codes Portfolio"
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Grow
          in={modalIsOpen}
          timeout={{ appear: 1000, enter: 1000, exit: 300 }}
        >
          <div className={`${classes.paper} code-card-modal`}>
            <div className="code-card-modal-close">
              <span onClick={() => setIsOpen(!modalIsOpen)}>
                <MdClose />
              </span>
            </div>
            <div>
            <img className="code-card-modal-image" src={image} alt={name} />
            </div>
            <Chip
              size="small"
              label={category}
              color={
                category === "Personal"
                  ? "secondary"
                  : category === "Organization"
                  ? "primary"
                  : "default"
              }
            ></Chip>
            <h3 className="code-card-title">{name}</h3>
            <p className="code-card-description">{description}</p>
            <Link to={link} target="_blank">
              <Button buttonSize="btn--wide" buttonColor="blue">
                See the code
              </Button>
            </Link>
          </div>
        </Grow>
      </Modal>
    </>
  );
}

export default CodeCard;
