import React from 'react';
import { Grid } from 'semantic-ui-react';
import { useEventContext } from '../../../context/EventContext';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';

export default function EventDashboard() {
  const { open_form, events } = useEventContext();

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>{open_form && <EventForm />}</Grid.Column>
    </Grid>
  );
}
