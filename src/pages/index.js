import React from "react"
import { graphql } from "gatsby"
import { VoiceList } from "components/VoiceList"
import { ImageRender } from "../components/imageRender"
import { ReactUseAudio } from "components/ReactAudioPlayer"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import { FV } from "../components/fv"
import SEO from "../components/seo"

export default function Home({ data }) {
  const countryNameEdges = data.allMicrocmsCountry.edges
  const greetingsEdges = data.allMicrocmsGreetings.edges

  return (
    <>
      {/* <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./style.css" />
      <title>Document</title> */}

      <SEO />

      <body>
        <FV />
        <section className="table">
          <ul className="row">
            {countryNameEdges.map(({ node }) => {
              const countryId = node.countryId
              console.log(node.country_image.url)

              return (
                <li key="{node.id}" className="item">
                  <figure class="snip1195">
                    <h4>{node.country_name}</h4>
                    <div class="image">
                      <ImageRender
                        url={node.country_image.url}
                        alt={`test`}
                        compress="auto=compress"
                        format="auto=format"
                        w="w=300"
                        h="h=200"
                        fit="fit=crop"
                      />
                    </div>
                    <div class="rating">
                      <p>{node.countryId}</p>
                    </div>
                    <figcaption>
                      <ul>
                        <VoiceList
                          greetingsEdges={data.allMicrocmsGreetings.edges}
                          countryId={node.countryId}
                        />
                      </ul>
                    </figcaption>
                    {/* <a href="#" class="add-to-cart">
                    詳しく見る
                  </a> */}
                  </figure>
                </li>
              )
            })}
          </ul>
        </section>
      </body>
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
          country_image {
            url
          }
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
