import { useState, useEffect } from "react";
import { List, makeStyles } from "@material-ui/core";
import LazyLoad from "react-lazyload";

import { ContactItem } from "./ContactItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  listItem: {
    borderBottom: "1px solid #ccc",
  },
}));

export function ContactList({ contactList }) {
  const classes = useStyles();
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  useEffect(() => {
    if (checked.length > 0) {
      console.log(checked);
    } else {
      console.log("Contact list is empty");
    }
  }, [checked]);

  return (
    <List className={classes.root}>
      {contactList.map((contact) => {
        const labelId = `checkbox-list-label-${contact.id}`;
        return (
          <LazyLoad key={contact.id} height={"50px"}>
            <ContactItem
              value={contact}
              labelId={labelId}
              handleToggle={handleToggle}
              checked={checked}
            />
          </LazyLoad>
        );
      })}
    </List>
  );
}
