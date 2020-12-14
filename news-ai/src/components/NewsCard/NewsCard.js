import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const NewsCard = ({ article: {}, i }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia />
        <div>
          <Typography
            variant="body2"
            color="testSecondary"
            component="h2"
          ></Typography>
          <Typography
            variant="body2"
            color="testSecondary"
            component="h2"
          ></Typography>
        </div>
        <Typography gutterBottom variant="h5"></Typography>
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"></Button>
        <Typography variant="h5" color="textSecondary">
          {article.description}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
