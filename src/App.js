import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import { useEventContext } from './context/EventContext';
import EventDashboard from './features/events/eventDashboard/EventDashboard';
import Navbar from './features/nav/Navbar';

function App() {
  const [openForm, setOpenForm] = useState(false);
  const { events, open_form } = useEventContext();
  return (
    <>
      <Navbar setOpenForm={setOpenForm} />
      <Container className='main'>
        <EventDashboard openForm={open_form} setOpenForm={setOpenForm} />
      </Container>
    </>
  );
}

export default App;
