import { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import ids from './camera.module.css'

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
}

function Camera() {
  const webcamRef = useRef<Webcam>(null)
  const [imageArray, setImageArray] = useState<string | null>(null)

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot()

    if (imageSrc) setImageArray(imageSrc)
  }, [imageArray])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        height={400}
        width={400}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>

      <div className={ids['image-preview']}>
        {imageArray !== null ? (
          <img src={imageArray} alt={`${imageArray}--image`} />
        ) : (
          'Image Non disponible'
        )}
        <div className={ids['image-preview-buttons']}>
          <button onClick={capture}>Reprendre une photo</button>
          <button onClick={capture}>Valider la photo</button>
        </div>
      </div>
    </div>
  )
}

export default Camera
