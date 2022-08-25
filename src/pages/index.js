import React from "react"
import useSound from "use-sound"
import Sound from "../assets/voices/kor_bye.mp3"
import { graphql } from "gatsby"

export default function Home({ data }) {
  const [play, { stop, pause }] = useSound(Sound)
  const countryNameEdges = data.allMicrocmsCountry.edges
  const greetingsEdges = data.allMicrocmsGreetings.edges

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./style.css" />
      <title>Document</title>
      <h1>世界のあいさつ</h1>
      <section className="table">
        <ul className="row">
          {
					countryNameEdges.map(({ node }) => {
						console.log(node.country_name)
            const countryId = node.countryId
            return (
              <li key="{node.id}" className="item">
                <h2 className="country">{node.country_name}</h2>
                <ul className="voice_list">
                  {greetingsEdges.map(({ node }) => {
										console.log (node.country.id === countryId)
										console.log (node.country.id)
										console.log (countryId)
                    if (node.country.id === countryId) {
                      return (
                        <li key="{node.id}" className="voice">
                          <figure>
                            <figcaption>
                              {node.japanese.greeting_word}：{node.foreign}
                            </figcaption>
                            <nav className="button-wrapper">
                              <button onClick={() => play()}>再生</button>
                              <button onClick={() => stop()}>停止</button>
                              <button onClick={() => pause()}>一時停止</button>
                            </nav>
                            <audio controls="" src="./voices/kor_morning.mp3">
                              Your browser does not support the
                              <code>audio</code> element.
                            </audio>
                          </figure>
                        </li>
                      )
                    }else{
											return null
										}
                  })}
                </ul>
              </li>
            )})
						}
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
