import { useState } from 'react';
import axios from 'axios';
import { Button } from "./ui/button";
import Authentication from '../utils/auth';

const VideoUpload = () => {
    const [file, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [isUploaded, setIsUploaded] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulating waitlist authentication

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setIsUploaded(false);
        setUploadProgress(0);
    };

    const handleUpload = async () => {
        if (!file) return;
        setIsUploading(true);

        const formData = new FormData();
        formData.append('video', file);

        try {
            await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress(progress);
                },
            });
            setIsUploaded(true);
            // Handle response and navigate to analysis page
        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className='px-4 mx-auto text-white sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
            <h1 className='text-6xl font-extrabold mb-8'>Upload Your Soccer Match Video</h1>
            
            {/* Toggle Button for Development */}
            <Button 
                onClick={() => setIsAuthenticated(!isAuthenticated)} 
                className="mb-8 text-lg px-4 py-2 bg-gray-800 text-white rounded"
            >
                Toggle Waitlist (Current: {isAuthenticated ? "Authenticated" : "Not Authenticated"})
            </Button>

            {!isAuthenticated && (
                <Authentication setIsAuthenticated={setIsAuthenticated} />
            )}
            {isAuthenticated && (
                <>
                    <input
                        type="file"
                        accept="video/*"
                        onChange={handleFileChange}
                        className='block w-full text-lg text-white file:mr-4 file:py-3 file:px-6 file:rounded file:border-0 file:text-lg file:font-semibold file:bg-gray-800 file:text-white hover:file:bg-gray-700 mb-4'
                    />
                    {file && (
                        <div className="mt-4 text-lg">
                            <p>Filename: {file.name}</p>
                            <p>Size: {(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                        </div>
                    )}
                    {isUploading && (
                        <div className="mt-4 w-full bg-gray-700 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
                        </div>
                    )}
                    <Button
                        variant="outline"
                        onClick={handleUpload}
                        disabled={!file || isUploading || isUploaded}
                        className={`${(!file || isUploading || isUploaded) ? 'opacity-50 cursor-not-allowed' : ''} ${isUploaded ? 'animate-pulse' : ''} mt-4 text-xl px-6 py-3`}
                    >
                        Upload
                    </Button>
                </>
            )}
        </div>
    );
};

export default VideoUpload;
