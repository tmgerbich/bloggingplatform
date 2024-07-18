import './App.css';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

export default function AddPost({ addPost, isLoggedIn, uid }) {
    const [post, setPost] = useState('');
    const [tags, setTags] = useState('');
    const [dateCreated, setDateCreated] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setDateCreated(new Date().toISOString()); // Set the current date and time
        addPost(post, tags, new Date().toISOString());
        setPost('');
        setTags('');
    };

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > :not(style)': { p: 2, width: '50ch' },
                mt: 4,
                mb: 3,
                bgcolor: "#2D5D7B",
                p: 3,
                borderRadius: 2
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            {isLoggedIn ? (
                <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                    Posting as {uid}
                </Typography>
            ) : (
                <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                    Posting as Anonymous
                </Typography>
            )}
            <TextField
                id="post"
                label="Post"
                variant="outlined"
                multiline
                rows={4}
                value={post}
                onChange={(e) => setPost(e.target.value)}
                InputProps={{
                    style: { backgroundColor: '#ADB5BD', color: 'black', padding: '10px' }
                }}
                InputLabelProps={{
                    style: { color: 'black', padding: '10px' }
                }}
            />
            <TextField
                id="tags"
                label="Tags"
                variant="outlined"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                InputProps={{
                    style: { backgroundColor: '#ADB5BD', color: 'black', padding: '10px' }
                }}
                InputLabelProps={{
                    style: { color: 'black', padding: '10px' }
                }}
            />
            <Button variant="contained" type="submit">Submit</Button>
        </Box>
    );
}
