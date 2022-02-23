import React from 'react';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

export default function EventListItem({ event }) {
  const { title, date, attendees, description, city, hostedBy, hostPhotoURL } =
    event;
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              size='tiny'
              circular
              src={hostPhotoURL || '/assets/user.png'}
            />
            <Item.Content>
              <Item.Header content={title} />
              <Item.Description>{hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {date}
          <Icon name='marker' />
          {city}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {attendees.map((attendee) => (
            <EventListAttendee attendee={attendee} key={attendee.id} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{description}</div>
        <Button color='teal' floated='right' content='View' />
      </Segment>
    </Segment.Group>
  );
}
