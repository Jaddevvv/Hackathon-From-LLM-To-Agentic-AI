import React, { useState, useEffect, useCallback } from 'react';
import { initializeTrustee } from '../trusteeInit';
export const Scoring = () => {
    const [score, setScore] = useState(50);
    const [colorClass, setColorClass] = useState('#4CAF50'); // Default green color
    // Function to update the score and color
    const updateScoreAndColor = useCallback((newScore) => {
        console.log('Updating score to:', newScore);
        setScore(newScore);
        // Update color based on score
        if (newScore >= 70) {
            setColorClass('#4CAF50'); // Green for good score
        }
        else if (newScore >= 40) {
            setColorClass('#FFC107'); // Yellow/amber for medium score
        }
        else {
            setColorClass('#F44336'); // Red for poor score
        }
    }, []);
    useEffect(() => {
        // Log for debugging
        console.log('Scoring component mounted, listening for messages...');
        // Initialize Trustee functionality
        initializeTrustee();
        // Listen for messages from the frontend to update the score
        const messageListener = (event) => {
            console.log('Message received:', event.data);
            // Handle direct UPDATE_SCORE messages
            if (event.data && event.data.type === 'UPDATE_SCORE') {
                updateScoreAndColor(event.data.score);
            }
            // Also handle messages with a trustee property for compatibility
            if (event.data && event.data.trustee && event.data.trustee.score !== undefined) {
                updateScoreAndColor(event.data.trustee.score);
            }
        };
        // Add global variable to make the update function accessible from outside React
        window._updateTrusteeScore = updateScoreAndColor;
        window.addEventListener('message', messageListener);
        // Also listen for direct DOM custom events as an alternative method
        document.addEventListener('trustee-score-update', ((e) => {
            if (e.detail && e.detail.score !== undefined) {
                console.log('Custom event received with score:', e.detail.score);
                updateScoreAndColor(e.detail.score);
            }
        }));
        // Do an initial update with a random score for testing
        setTimeout(() => {
            updateScoreAndColor(Math.floor(Math.random() * 30) + 60);
        }, 500);
        return () => {
            window.removeEventListener('message', messageListener);
            document.removeEventListener('trustee-score-update', (() => { }));
            delete window._updateTrusteeScore;
        };
    }, [updateScoreAndColor]);
    const containerStyle = {
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: '#ffffff',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        zIndex: 9999
    };
    useEffect(() => {
        console.log('Current score in component state:', score);
    }, [score]);
    return (
    // <div style={containerStyle}>
    //   <ScoringGauge score={score} colorClass={colorClass} />
    // </div>
    React.createElement("div", null,
        React.createElement("h1", null, "Trustee")));
};
