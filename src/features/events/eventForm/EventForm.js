import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import { useEventContext } from '../../../context/EventContext';

export default function EventForm() {
  const {
    handleInputChange,
    event: { category, city, date, description, title, venue },
    handleSubmit,
    resetInputs,
    selected_event,
    updateEvent,
  } = useEventContext();
  const [eventUpdate, setEventUpdate] = useState(selected_event);
  return (
    <Segment clearing>
      <Header
        content={selected_event ? 'Edit the event' : 'Create a new event'}
      />
      <Form onSubmit={selected_event ? updateEvent : handleSubmit}>
        <Form.Field>
          <input
            name='title'
            type='text'
            value={title}
            placeholder='Event title'
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            name='category'
            value={category}
            type='text'
            placeholder='Category'
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            value={description}
            name='description'
            type='text'
            placeholder='Description'
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            value={city}
            name='city'
            type='text'
            placeholder='City'
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            value={venue}
            name='venue'
            type='text'
            placeholder='Venue'
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            value={date}
            name='date'
            type='date'
            placeholder='Date'
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          type='submit'
          floated='right'
          content='Cancel'
          onClick={() => resetInputs()}
        />
      </Form>
    </Segment>
  );
}
