import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const UserList = ({ users }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="user list">
        {users.map((user, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`User ${index + 1}`}
              secondary={`Name: ${user.username}, Password: ${user.password}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UserList;
