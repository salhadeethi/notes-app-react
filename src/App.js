import NotesList from "./component/NotesList";
import { useState, useEffect } from 'react';
import produce from 'immer';
import { nanoid } from 'nanoid';

function App() {
  return (
    <div className="container">
      <NotesList />
    </div>
  );
}

export default App;
