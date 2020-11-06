import React, { useState } from 'react'
import { Button, CircularProgress } from '@material-ui/core'
import firebase from "firebase";
import { storage, db } from './firebase';
import './ImageUpload.css'

function ImageUpload({ postId, username }) {
    const [caption, setCaption] = useState('');
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            }, 
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        // post image inside db
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            username: username,
                            likes: '0',
                            userslike: []
                        }
                        )
                        setProgress(0);
                        setCaption('');
                        setImage(null);
                    });
            }
        );
    };
    return (
        <div className="imageupload">
            <CircularProgress variant="static" value={progress} max="100" />
            <input type="text" placeholder="Enter a caption.." onChange={event => setCaption(event.target.value)}value={caption}/>
            <input type="file" onChange={handleChange}/>
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}

export default ImageUpload
