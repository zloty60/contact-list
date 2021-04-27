import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
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
    <ListItem
      button
      className={classes.listItem}
      onClick={handleToggle(value.id)}
    >
      <ListItemAvatar>
        <Avatar
          alt={`${value.first_name} ${value.last_name} avatar`}
          src={value.avatar}
        />
      </ListItemAvatar>
      <Box flexGrow={1}>
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
      </Box>
      <>
        <Checkbox
          edge="end"
          checked={checked.indexOf(value.id) !== -1}
          inputProps={{ "aria-labelledby": labelId }}
        />
      </>
    </ListItem>
  );
}
