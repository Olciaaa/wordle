import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { GameService } from '../services/Game';

const Upload = () => {
    const [file, setFile] = useState(null);

    useEffect(() => {
        if(file) {
            GameService.sendImage(file);
        }
    }, [file])

    return (
        <div>
            <input 
                type="file" 
                id="imageFile" 
                capture="user" 
                accept="image/*" 
                onChange={(e) => setFile(e.target.files.length > 0 ? e.target.files[0] : null)}
            />
        </div>
    );
};

export default Upload;