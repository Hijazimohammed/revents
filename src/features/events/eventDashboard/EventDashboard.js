import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { sampleData } from '../../../app/api/sampleData';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';

export default function EventDashboard({ openForm, setOpenForm }) {
  const [events, setEvents] = useState(sampleData);

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        {openForm && <EventForm setOpenForm={setOpenForm} />}
      </Grid.Column>
    </Grid>
  );
}
