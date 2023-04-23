import styled from "@emotion/styled";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledListItem = styled(ListItem)({
  height: "30px",
});

const ListComponent = ({title, font, path}) => {
  return (
    <>
      <List disablePadding>
        <Link to={`/${path}`}>
        <StyledListItem className="hover:bg-gray-50 hover:border-l-2 hover:border-gray-300">
          <Typography style={{ fontSize: "9px", fontWeight: `${font}` }} variant="span">
            {title}
          </Typography>
        </StyledListItem>
        </Link>
      </List>
    </>
  );
};

export default ListComponent;
