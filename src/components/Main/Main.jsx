import { useContext } from "react"
import { assets } from "../../assets/assets"
import "./Main.css"
import { Context } from "../../context/context"

import { CaretDownFilled } from "@ant-design/icons"
import { Button, Flex } from "antd"





const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
                /* Header Section*/        
        <div className="main">
            <div className="nav">
                <Flex gap="small" wrap>
                    <Button type="text" className="gemini">
                        Gemini <CaretDownFilled style={{ fontSize: "16px" }} />
                    </Button>
                </Flex>

                <img src={assets.user_icon} alt="" />

            </div>
        {/* Cards Section */}

            <div className="main-container" >
                {!showResult ? <>
                    <div className="greet" >
                        <p><span>Hello,Dev</span></p>
                        <p>How can I help you today?</p>
                    </div>
                    <div className="cards"  >
                        <div className="card" >
                            <p >Suggest an organized list of the best food spots in a city</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Help me find YouTube videos to care for a specific plant</p>
                            <img src={assets.youtube_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Brainstorm a tagline for my online store</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Help me craft an OOO message based on a few details</p>
                            <img src={assets.message_icon} alt="" />
                        </div>
                    </div>
                </> : <div className="result">
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>

                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading ? <div className="loader" >
                            <hr />
                            <hr />
                            <hr />
                        </div> : <p dangerouslySetInnerHTML={{ __html: resultData }} ></p>}
                    </div>
                </div>

                }
                    {/* Search-Box Section*/}

                <div className="main-bottom">
                    <div className="search-box" >
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
                        <div>
                            <img src={assets.gallery_icon} alt="" aria-label="Open gallery" />
                            <img src={assets.mic_icon} alt="" aria-label="Use microphone for input" />
                            {input ? (
                                <button onClick={() => onSent()}>
                                    <img src={assets.send_icon} type="submit" alt="Send" />
                                </button>
                            ) : null}
                        </div>
                    </div>
                    <div className="bottom-info" >
                        <p  >Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Main