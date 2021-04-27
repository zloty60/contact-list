import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  listItem: {
    borderBottom: "1px solid #ccc",
  },
  contactName: {
    fontWeight: "bold",
  },
  email: {
    color: "#676767",
    fontSize: "15px",
  },
}));

export function ContactItem({ value, labelId, handleToggle, checked }) {
  const classes = useStyles();
  return (
    <ListItem button className={classes.listItem}>
      <ListItemAvatar>
        <Avatar
          alt={`${value.first_name} ${value.last_name} avatar`}
          src={value.avatar}
        />
      </ListItemAvatar>
      <div>
        <ListItemText
          id={labelId}
          primary={`${value.first_name}  ${value.last_name} `}
          primaryTypographyProps={{ variant: "inherit" }}
          className={classes.contactName}
        />
        <ListItemText
          id={labelId}
          primary={value.email}
          primaryTypographyProps={{ variant: "inherit" }}
          className={classes.email}
        />
      </div>
      <ListItemSecondaryAction>
        <Checkbox
          edge="end"
          onChange={handleToggle(value.id)}
          checked={checked.indexOf(value.id) !== -1}
          inputProps={{ "aria-labelledby": labelId }}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
}
