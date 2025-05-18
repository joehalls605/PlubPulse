import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
    // Joe add setGameOver to time
    // Progress uses total questions as a maxium (10 probs)

    const [progress, setProgress] = useState(0);


    return(
        <div className="d-flex flex-row w-100 mt-3 mb-3">
                <div className="w-100" style={{height: '11px', backgroundColor: '#f1f3f5', borderRadius: '4px', overflow:'hidden'}}>
                    <div style={{width:`${progress}`, height: '100%', backgroundColor:'#0d6efd', transition: 'width 0.3s ease'}}></div>
                </div>
        </div>
    )
}

export default ProgressBar;