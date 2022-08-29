import React from "react"
import { ReactAudioPlayer } from "components/ReactAudioPlayer"

// import { useState, useEffect, useRef } from "react"

export default function VoiceTest() {
  // const audioRef = useRef(null)
  // const [playState, setPlayState] = useState("stop") // 再生状態

  // sound.play()

  return (
    <>
      <h1>音声テスト用ページ</h1>
      <ReactAudioPlayer />
    </>
  )
}

// https://wavesurfer-js.org/docs/
