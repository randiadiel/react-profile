import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { MdClose } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Chip from "@material-ui/core/Chip";
import Grow from "@material-ui/core/Grow";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Skeleton from "@material-ui/lab/Skeleton";
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

function CodeCard({ name, description, image, code, category, links }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [onLoad, setOnLoad] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  return (
    <>
      <div className={`code-card ${onLoad ? "" : "hiddens"}`}>
        <div className="code-card-image-container">
          <img
            onLoad={() => {
              setOnLoad(!onLoad);
            }}
            className={`${
              !onLoad ? "hidden onLoading" : "animated fadeIn"
            } code-card-image`}
            src={image}
            alt={name}
          />
          {!onLoad && (
            <Skeleton className="code-card-skeleton" variant="rect"></Skeleton>
          )}
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
            {links.length > 0 && (
              <div className="code-card-attachment">
                <Chip
                  size="small"
                  avatar={<FiExternalLink />}
                  label="External Link"
                  clickable
                  color="default"
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                />
              </div>
            )}
            <Link to={code} target="_blank">
              <Button buttonSize="btn--wide" buttonColor="blue">
                See the code
              </Button>
            </Link>

            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={() => setAnchorEl(null)}
              TransitionComponent={Grow}
              className="code-card-attachment-menu"
            >
              {links.map((l) => (
                <Link key={l.id} to={l.url} target="_blank">
                  <MenuItem onClick={() => setAnchorEl(null)}>
                    {l.name}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </div>
        </Grow>
      </Modal>
    </>
  );
}

export default CodeCard;
