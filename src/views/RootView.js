import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography } from "@material-ui/core";

import { fetchContactList } from "./../redux/actions/contactListActions";
import { Navbar } from "./../components/navbar/Navbar";
import { SearchInput } from "./../components/searchForm/SearchInput";
import { ContactList } from "./../components/contacts/ContactList";

export function RootView() {
  const dispatch = useDispatch();
  const { contactList, isError } = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(fetchContactList());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <SearchInput contactList={contactList} />
      <Container>
        {isError ? (
          <Typography>something went wrong</Typography>
        ) : (
          <ContactList contactList={contactList} />
        )}
      </Container>
    </>
  );
}
