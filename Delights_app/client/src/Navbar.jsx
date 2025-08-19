// Application Navigation bar ----Left Menu------------------

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 300, bgcolor: '#f8f7f5' }}>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://bouqs.com/blog/wp-content/uploads/2022/03/shutterstock_260182148-min.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
        />
      </ListItem>
      <Divider variant="inset" component="li" />

       <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
        />
      </ListItem>
      <Divider variant="inset" component="li" />

       <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
        />
      </ListItem>
      <Divider variant="inset" component="li" />

      
    </List>
  );
}

