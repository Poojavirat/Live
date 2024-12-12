import React from 'react'
import {ReactMediaRecorder} from 'react-media-recorder'

const Record = () => {
  return (
    <div>
      <ReactMediaRecorder
      
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          <p>{status}</p>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          <video src={mediaBlobUrl} controls autoPlay loop />
        </div>
      )}
      />
    </div>
  )
}

export default Record
