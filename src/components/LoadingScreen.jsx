import React from 'react'
import './LoadingScreen.css'

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="logo">
          <div className="logo-text gradient-text">NN</div>
        </div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <div className="loading-text">
          <span className="gradient-text">Loading Portfolio...</span>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
