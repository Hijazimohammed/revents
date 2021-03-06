import React from 'react';
import { Image, List } from 'semantic-ui-react';

export default function EventListAttendee({ attendee }) {
  const { name, photoURL } = attendee;
  return (
    <List.Item>
      <Image
        size='mini'
        circular
        src={photoURL || '/assets/user.png'}
        alt={name}
      />
    </List.Item>
  );
}
