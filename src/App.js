import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from './features/events/eventDashboard/EventDashboard';
import Navbar from './features/nav/Navbar';

function App() {
  const [openForm, setOpenForm] = useState(false);
  return (
    <>
      <Navbar setOpenForm={setOpenForm} />
      <Container className='main'>
        <EventDashboard openForm={openForm} setOpenForm={setOpenForm} />
      </Container>
    </>
  );
}

export default App;
