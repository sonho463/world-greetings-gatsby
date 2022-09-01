import React from "react"
import { ReactUseAudio } from "components/ReactAudioPlayer"

// import useSound from "use-sound"
// import KorBye from "/assets/voices/kor_bye.mp3"
// import KumeBye from "/assets/voices/kume_bye.mp3"

// サウンドファイルの名前をgraphqlで取得

export const VoiceList = props => {
  const { countryId } = props
  const itemList = []
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
        </li>
      )
    }
  })
if(itemList.length===0){
	itemList.push(
		<li>表示するデータがありません。</li>
	)
}

  return (
    <ul className="voice_list">

      {itemList}

    </ul>
  )
}
