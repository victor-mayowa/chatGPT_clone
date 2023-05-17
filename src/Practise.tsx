import { useState } from "react"
import axios from "axios"
import { Configuration, OpenAIApi } from "openai"
import "./Practise.css"
import { TbSend } from "react-icons/tb"
import { RxArrowRight } from "react-icons/rx"
import { MdOutlineWbSunny } from "react-icons/md"
import { BsLightningCharge } from "react-icons/bs"
import { IoWarningOutline } from "react-icons/io5"

const Practise = () => {

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY
  })

  const openai = new OpenAIApi(configuration)

  const [message, setMessage] = useState("")
  const [content, setContent] = useState("")

  const generate = async () => {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `${message}` }],
    });
    const nnn = response.data.choices[0].message?.content

    setContent(nnn || "")
  }

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    generate()
    setMessage("")
  }

  const clearContent = () => {
    setContent("")
  }


  const style = { fontSize: "1.7rem" }

  return (
    <div className="main">

      <aside className="aside">
        <div className="new-chat" onClick={clearContent}>
          <span className="icon" >+</span> <p>New chat</p>
        </div>
        <ul className="history">
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
        </ul>

        <div className="credit"><p>clone by victor-mayowa</p></div>

      </aside>



      <div className="container ">

        <div className="section">

          <div className="section-header">
            <h1>ChatGPT</h1>
          </div>

          <div className="section-content-container">

            <div className="section-content">
              <div className="section-content-header">
                <div ><MdOutlineWbSunny style={style} /></div>
                <div className="section-content-header-text"><h2>Examples</h2></div>
              </div>
              <div className="section-content-boxes">
                <div className="boxes select"><p>"Explain quantum computing in simple terms"</p>
                  {/* <RxArrowRight /> */}

                </div>
                <div className="boxes select"><p>"Got any creative ideas fo a 10 year old's birthday?"</p>
                  {/* <RxArrowRight /> */}

                </div>
                <div className="boxes select"><p>How do I make an HTTP request in Javascript?</p>
                  {/* <RxArrowRight /> */}


                </div>
              </div>
            </div>

            <div className="section-content">
              <div className="section-content-header">
                <div className="icon"><BsLightningCharge style={style} /></div>
                <div className="section-content-header-text"><h2>Capabilities</h2></div>
              </div>
              <div className="section-content-boxes">
                <div className="boxes"><p>Remembers what user said earlier in the conversation</p></div>
                <div className="boxes"><p>Allows user to provide follow-up corrections</p></div>
                <div className="boxes"><p>Trained to decline inappropriate requests</p>
                </div>
              </div>
            </div>

            <div className="section-content">
              <div className="section-content-header">
                <div className="icon"><IoWarningOutline style={style} /></div>
                <div className="section-content-header-text"><h2>Limitations</h2></div>
              </div>
              <div className="section-content-boxes">
                <div className="boxes"><p>May occasionally generate incorrect information</p></div>
                <div className="boxes"><p>May occasionally produce harmful instruction or biased content</p></div>
                <div className="boxes"><p>Limited knowledge of world and events after 2021</p>
                </div>
              </div>
            </div>

          </div>


        </div>

        <div className="bottom-section">
          <form onSubmit={submitHandler} className="form">
            <input type="text" placeholder="Send a message" className="inputArea" value={message} onChange={(e) => {
              setMessage(e.target.value)
            }} />
            <button className="submitButton"><TbSend /></button>
          </form>
          <p className="info">Free Research Preview. ChatGPT may produce inaccurate information about  people, places or facts. ChatGPT May 12 Version</p>
        </div>

      </div>


    </div>

  )
}

export default Practise