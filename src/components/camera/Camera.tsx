import { useRef, useEffect, useCallback, useState } from 'react'

function Camera() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [image, setNewImage] = useState<string | null>(null)

  useEffect(() => {
    // Demander l'accès à la caméra
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        // Afficher le flux vidéo dans un élément <video>
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          videoRef.current.play()
        }
      })
      .catch(function (err) {
        console.log(err.name + ': ' + err.message)
      })
  }, [])

  const takePicture = useCallback(() => {
    // Prendre une photo en utilisant un élément <canvas>
    const canvas = canvasRef.current
    const video = videoRef.current
    if (canvas && video) {
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      canvas.getContext('2d')?.drawImage(video, 0, 0)
      //Convertir l'image en données URL
      const imageDataUrl = canvas.toDataURL('image/jpeg')

      // Faire quelque chose avec l'image, par exemple, l'afficher dans une balise <img>

      setNewImage(imageDataUrl)
    }
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <video ref={videoRef} autoPlay playsInline />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <button onClick={takePicture}>Prendre une photo</button>
      {image && <img src={image}></img>}
    </div>
  )
}

export default Camera
