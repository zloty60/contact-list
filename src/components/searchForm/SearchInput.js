import { useState } from "react";

import { Box, makeStyles, Container } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    border: "none",
    backgroundColor: "transparent",
    width: "100%",
    fontFamily: "Roboto, sans-serif",
    fontSize: "18px",
    "&:focus-visible": {
      outline: "none",
    },
  },
  searchFormWrapper: {
    backgroundColor: "#fff",
  },
  searchIcon: {
    color: "#aaa",
    marginRight: "10px",
  },
}));

export function SearchInput() {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");

  const handleToggle = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <Box pt={3} pb={3} className={classes.searchFormWrapper}>
        <Container>
          <Box display="flex" alignItems="center">
            <SearchIcon className={classes.searchIcon} />
            <input
              value={inputValue}
              className={classes.searchInput}
              placeholder="Search"
              onChange={handleToggle}
            />
          </Box>
        </Container>
      </Box>
    </div>
  );
}
