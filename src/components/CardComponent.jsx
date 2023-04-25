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
import { Fragment } from "react";

const CardComponent = ({
  userId,
  img,
  title,
  subTitle,
  description,
  id,
  onDelete,
  onEdit,
  canEdit,
  payload,
  isAdmin,
  isBiz,
}) => {
  const handleDeleteBtnClick = () => {
    onDelete(id);
  };
  const handleEditBtnClick = () => {
    onEdit(id);
  };

  return (
    <Card square raised>
      <CardActionArea>
        <CardMedia component="img" image={img} />
      </CardActionArea>
      <CardHeader title={title} subheader={subTitle}></CardHeader>
      <CardContent>
        <Typography>{description}</Typography>
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
          <Button variant="text" color="warning" onClick={handleEditBtnClick}>
            Like
          </Button>
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
  description: PropTypes.string.isRequired,
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
