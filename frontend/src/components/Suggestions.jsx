import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import SuggestedPerson from "./SuggestedPerson";

const Suggestions = () => {
  return (
    <Box>
      <div className="flex flex-row justify-between items-center">
        <Typography style={{ color: '#ccc', fontSize:'9px', fontWeight: 500}} variant="span">Suggested for you</Typography>
        <Typography variant="span" style={{ fontSize: '9px', fontWeight: 500}} className='cursor-pointer hover:text-gray-500'>See all</Typography>
      </div>


      <Box>
        <List>
          <SuggestedPerson />
          <SuggestedPerson />
          <SuggestedPerson />
          <SuggestedPerson />
          <SuggestedPerson />
        </List>
      </Box>
    </Box>
  );
};

export default Suggestions;
