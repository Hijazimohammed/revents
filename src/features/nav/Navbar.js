import React, { useState } from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useEventContext } from '../../context/EventContext';

export default function Navbar({ setOpenForm }) {
  const { openForm } = useEventContext();
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu name='Events' inverted />
        <Menu.Item>
          <Button
            positive
            inverted
            content='Create Event'
            onClick={() => openForm(true)}
          />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button basic inverted content='Login' />
          <Button
            basic
            inverted
            content='Register'
            style={{ marginLeft: '.5em' }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
