import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { GameService } from '../services/Game';
import '../styles/upload.css';

const Upload = () => {
    const [file, setFile] = useState(null);

    useEffect(() => {
        if(file) {
            GameService.sendImage(file);
        }
    }, [file])

    return (
        <div>
            <div className="container">
                <form className="form">
                    <div className="file-upload-wrapper">
                        <input
                            name = "file-upload-field" 
                            type="file" 
                            id="imageFile" 
                            className = "file-upload-field"
                            capture="user" 
                            accept="image/*" 
                            onChange={(e) => setFile(e.target.files.length > 0 ? e.target.files[0] : null)}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Upload;