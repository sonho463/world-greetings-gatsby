import React from "react"
import { ReactUseAudio } from "components/ReactAudioPlayer"

// import useSound from "use-sound"
// import KorBye from "/assets/voices/kor_bye.mp3"
// import KumeBye from "/assets/voices/kume_bye.mp3"

// サウンドファイルの名前をgraphqlで取得

export const VoiceList = props => {
  const {
    countryId,
    //  countryName, voice
  } = props
  const itemList = []

  // const Sound = KumeBye
  // const [play, { stop, pause }] = useSound(Sound)
  // console.log(props.greetingsEdges[0])
  props.greetingsEdges.forEach(ele => {
    // console.log(ele.node.japanese.greeting_word)
    const vPath = `/assets/voices/${ele.node.voice}.mp3`
    if (countryId === ele.node.country.id) {
      itemList.push(
        <li className="voice__item">
          <p>
            {ele.node.japanese.greeting_word} <br />
            {ele.node.foreign}
          </p>
          <div>
            <ReactUseAudio src={vPath} />
          </div>

          {/* <nav className="button-wrapper">
            <button onClick={() => play()}>再生</button>
            <button onClick={() => stop()}>停止</button>
            <button onClick={() => pause()}>一時停止</button>
          </nav> */}
        </li>
      )
    }
  })
  // console.log(countryId)
  // console.log(countryName)
  // props.greetingEdges.map((node)=>{
  // 	console.log(node.japanese.greeting_word)
  // })

  return (
    <ul className="voice_list">
      {itemList}
      {/* {greetingsEdges.map(({ node }) => {
        // console.log(node.country.id === countryId)
        // console.log(node.country.id)
        // console.log(countryId)
        if (node.country.id === countryId) {
          return (
            <li key="{node.id}" className="voice">
              <figure>
                <figcaption>
                  {node.japanese.greeting_word}：{node.foreign}
                </figcaption>
                <AudioButtons />
                <audio controls="" src="./voices/kor_morning.mp3">
                  Your browser does not support the
                  <code>audio</code> element.
                </audio>
              </figure>
            </li>
          )
        } else {
          return null
        }
      })} */}
    </ul>
  )
}
