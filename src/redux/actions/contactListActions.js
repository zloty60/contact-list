import axios from "axios";

import { contactListActions } from "./../actionConstants";

export const fetchContactList = () => async (dispatch) => {
  const url =
    "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json";

  try {
    dispatch({
      type: contactListActions.FETCH_CONTACTS_START,
    });
    const { data } = await axios.get(url);
    const sortedByLastName = data.sort(compareLastName);
    dispatch({
      type: contactListActions.FETCH_CONTACTS_SUCCESS,
      payload: sortedByLastName,
    });
  } catch (err) {
    dispatch({
      type: contactListActions.FETCH_CONTACTS_FAIL,
    });
  }
};

const compareLastName = (a, b) => {
  const A = a.last_name.toUpperCase();
  const B = b.last_name.toUpperCase();

  let comparison = 0;
  if (A > B) {
    comparison = 1;
  } else if (A < B) {
    comparison = -1;
  }
  return comparison;
};
