import { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
}

function Camera() {
  const webcamRef = useRef<Webcam>(null)
  const [imageArray, setImageArray] = useState<string[]>([])

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot()

    if (imageSrc)
      setImageArray((prev) => [...prev, prev.push(imageSrc).toString()])
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

      {imageArray.map((value, index) => {
        console.log('image', value)
        return value !== ' ' ? (
          <img
            key={`${value}-${index}`}
            src={value.toString()}
            alt={`${value}-${index}-image`}
          />
        ) : (
          'Image Non disponible'
        )
      })}
    </div>
  )
}

export default Camera
