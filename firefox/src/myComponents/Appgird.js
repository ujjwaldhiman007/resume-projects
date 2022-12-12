import React from 'react'
import { AppData } from './data'



export default function Appgird() {
  return (
    <>
      <section className="app-container">
        <article className="app-box">
          {AppData.map((orange) => {
            const { Image, info, tabLink, id } = orange
            return <a href={tabLink}  key={id}>
              <div className="app-logo">
                <div className="app-logo-inner">
                  <img src={Image} alt="" />
                </div>
                <h2>{info}</h2>
              </div>
            </a>
          })}
        </article>
      </section>
    </>
  )
}
