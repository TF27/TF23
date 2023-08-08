import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { UserAuth } from '../../../../contexts/AuthContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function LeaveTeamModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';


  const {user} = UserAuth();
  const [teamId, setTeamId] = useState('');


  const handleChange = (e) =>{
    const {name, value} = e.target;
    setTeamId(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      parti_email: user?.email,
    };    

    const config = {
      headers: {
        'X-Team-ID': 'Cozmo-230269',
        // 'X-CSRFToken': getCookie('csrftoken'), // Include the CSRF token
      },
    };


    console.log(data)
    axios.put('/api/leave_team/', data, config)
      .then((response) => {
        console.log(response.data);   
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Button onClick={handleOpen}>Leave Team</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            To Confirm you want to Leave the Team, Enter your Team ID
          </Typography>
          <TextField
            label="Team ID"
            name="teamId"
            value={teamId}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
          <Button onClick={handleSubmit}>Leave</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default LeaveTeamModal;
