'use client';

import { ListGroup } from 'react-bootstrap';
import { Note } from '@prisma/client'; // Adjust the import path as necessary

/* Renders a single contact. See list/page.tsx. */
const NoteItem = ({ note }: { note: Note }) => (
  <ListGroup.Item>
    <p className="fw-lighter">{note.createdAt.toLocaleDateString('en-US')}</p>
    <p>{note.note}</p>
  </ListGroup.Item>
);

export default NoteItem;
