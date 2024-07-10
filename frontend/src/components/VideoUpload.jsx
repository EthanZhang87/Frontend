import { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button"

const VideoUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;
        const formData = new FormData();
        formData.append('video', file);

        try {
            const response = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            // Handle response and navigate to analysis page
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <h2>Upload Soccer Match Video</h2>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <Button variant="contained" onClick={handleUpload}>Upload</Button>
        </div>
    );
};

export default VideoUpload;
