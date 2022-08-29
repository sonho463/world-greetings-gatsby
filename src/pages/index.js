import React from "react"
import { graphql } from "gatsby"
import {VoiceList} from 'components/VoiceList'
import useSound from "use-sound"
import KorBye from "../assets/voices/kor_bye.mp3"
import KumeBye from "../assets/voices/kume_bye.mp3"
export default function Home({ data }) {
  const countryNameEdges = data.allMicrocmsCountry.edges
  const greetingsEdges = data.allMicrocmsGreetings.edges
	const Sound = KumeBye
  const [play, { stop, pause }] = useSound(Sound)

	// React use audio player
	// https://www.npmjs.com/package/react-use-audio-player



  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./style.css" />
      <title>Document</title>
      <h1>世界のあいさつ</h1>
			{/* <Test /> */}

      <section className="table">
        <ul className="row">
          {countryNameEdges.map(({ node }) => {
            const countryId = node.countryId
            return (
              <li key="{node.id}" className="item">
                <h2 className="country">{node.country_name}</h2>
                <VoiceList
                  greetingsEdges={data.allMicrocmsGreetings.edges}
                  countryId={node.countryId}
                  countryName={node.country_name}
                  voice={node.voice}
                />
                {/* <nav className="button-wrapper">
                  <button onClick={() => play()}>再生</button>
                  <button onClick={() => stop()}>停止</button>
                  <button onClick={() => pause()}>一時停止</button>
                </nav> */}

              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export const query = graphql`
  query {
    allMicrocmsCountry(sort: { order: ASC, fields: country_name }) {
      edges {
        node {
          country_name
          countryId
        }
      }
    }
    allMicrocmsGreetings {
      edges {
        node {
          country {
            country_name
            id
          }
          japanese {
            greeting_word
          }
          foreign
          voice
        }
      }
    }
  }
`
