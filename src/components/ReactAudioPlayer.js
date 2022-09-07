import React from "react"
import { AudioPlayerProvider } from "react-use-audio-player"
import { useAudioPlayer } from "react-use-audio-player"

export const ReactUseAudio = (props) => {
	const {src} = props
  const AudioPlayer = ({ file }) => {
    const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
      src: src,
      format: "mp3",
      autoplay: false,
      onend: () => console.log("sound has ended!"),
    })

    if (!ready && !loading) return <div>ー</div>
    if (loading) return <div>Loading</div>

    return (
      <div>
        <button onClick={togglePlayPause}>{playing ? "||" : "▶"}</button>
      </div>
    )
  }

  return (
    <AudioPlayerProvider>
      <AudioPlayer />
    </AudioPlayerProvider>
  )
}
