import React from 'react';
import {
  ListItemIcon,
  ListItem,
  ListItemText,
  Divider,
  List,
} from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles'
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';

//const useStyles = makeStyles(theme => ({
//toolbar: theme.mixins.toolbar,
//}))

export default function Menu() {
  //const classes = useStyles()

  return (
    <>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
