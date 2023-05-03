import {
  CardActionArea,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const CardComponent = ({
  cardNumber,
  phone,
  address,
  userId,
  img,
  title,
  subTitle,
  description,
  id,
  onDelete,
  onEdit,
  onLike,
  canEdit,
  payload,
  isAdmin,
  checked,
  onEV,
  onCardClick,
}) => {
  const handleDeleteBtnClick = () => {
    onDelete(id);
  };
  const handleEditBtnClick = () => {
    onEdit(id);
  };
  const handleLikeBtnClick = () => {
    onLike(id);
  };
  const handleChange = (ev) => {
    onEV(ev);
  };
  const handleCardClick = () => {
    onCardClick(id);
  };

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          onClick={handleCardClick}
          component="img"
          image={img}
          sx={{ height: "400px" }}
        />
      </CardActionArea>
      <CardHeader title={title} subheader={subTitle}></CardHeader>
      <CardContent>
        <Typography>Phone: {phone}</Typography>
        <Typography>Address: {address}</Typography>
        <Typography>Card Number: {cardNumber}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" color="primary">
          Call
        </Button>
        {canEdit === userId ? (
          <Fragment>
            <Button variant="text" color="warning" onClick={handleEditBtnClick}>
              Edit
            </Button>
          </Fragment>
        ) : (
          ""
        )}
        {canEdit === userId || isAdmin ? (
          <Button variant="text" color="error" onClick={handleDeleteBtnClick}>
            Delete
          </Button>
        ) : (
          ""
        )}

        {payload ? (
          <div>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              checked={checked}
              onClick={handleLikeBtnClick}
              onChange={handleChange}
            />
          </div>
        ) : (
          ""
        )}
      </CardActions>
    </Card>
  );
};

CardComponent.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  canEdit: PropTypes.string,
};

CardComponent.defaultProps = {
  img: "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png",
  subTitle: "",
  canEdit: false,
};

export default CardComponent;
