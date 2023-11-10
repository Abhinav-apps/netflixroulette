import React from 'react';
import Dialog from '../components/Dialog'; // Update with the actual path

export default {
  title: 'DeleteMovie',
};

export const DeleteMovie = () => (
  <Dialog title="DELETE MOVIE" onClose={() => console.log('Dialog Closed')}>
    <div>Are you sure you want to delete this movie?</div>
    <div className="delete-dialog-buttons">
      <button onClick={() => console.log('Confirmed')}>Confirm</button>
      <button onClick={() => console.log('Cancelled')}>Cancel</button>
    </div>
  </Dialog>
);