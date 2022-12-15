import { type NextPage } from "next"
import Head from "next/head"
import Container from "./components/_container"
import Navbar from "./components/_navbar"
import Article from "./components/_article"
import Card from "./components/_card"
import Content from "./components/_content"
import Text from "./components/_text"
import Img from "./components/_img"
import { useState } from "react"

const Article1: NextPage = () => {
    return (
        <>
        </>
    )
}

const International: NextPage = () => {
    const [article, setArticle] = useState(0)
    return (
        <>
            <Head>
                <title>The Times - International News</title>
            </Head>

            <main className="overflow-x-hidden">
                <Container>
                    <Navbar></Navbar>
                    <div className={article !== 0 ? "hidden" : "flex flex-col items-center"}>
                        <h1 className="text-7xl mt-5">International News</h1>
                        <Content className="w-[90%]">
                            <Card title="Britney Griner's Trade" action={
                                <button className="btn" onClick={() => { setArticle(1) }}>Read Article</button>
                            } src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-12/221208-Brittney-Griner-nevada-an-3c64a1.jpg">
                                Recently, Britney Griner was traded with Russian Arms dealer Viktor Bout. Many people are happy,
                                however, many others are skeptical.
                            </Card>
                            <Card title="Protests in Iran" action={
                                <button className="btn" onClick={() => { setArticle(2) }}>Read Article</button>
                            } src="https://media.cnn.com/api/v1/images/stellar/prod/221208011208-iran-tehran-protests-file.jpg?c=16x9&q=h_720,w_1280,c_fill">
                                Protests spark in Iran as protestors get brutally suppressed when protesting for more rights.
                            </Card>
                        </Content>
                    </div>
                    <div className={article !== 1 ? "hidden" : ""}>
                        <Article title="Britney Griner's Trade">
                            <Content>
                                <Img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-12/221208-Brittney-Griner-nevada-an-3c64a1.jpg" />
                                <Text className="mt-10">
                                    Recently, Britney Griner was released from a Russian prison in exchange for Russian Arms dealer Viktor Buot,
                                    who was arrested for conspiring with and selling arms to terrorist organizations. Britney Griner, a member of the WNBA,
                                    was arrested in Russia on charges of drug smuggling. Many people were happy for her release. However, many others believed that
                                    trade should never had happened.
                                </Text>
                                <Text className="mt-5">
                                    Britney Griner was seen by many as completely innocent, so her arrest in Russia sparked anger among
                                    the general American public. Though after she was released, a big handful of people believe that the prison
                                    exchange should have never happened. They believe that trading a basketball player for an arms dealer
                                    is a horrible trade. Others believe that Britney Griner's release was all a part of Putin's plan to divide
                                    the US further. "Deepening America’s racial divides is part of a long-standing Soviet playbook," quotes an MSNBC
                                    opinion article.
                                </Text>
                                <Text className="mt-5">
                                    Joe Biden fought back against critics, saying that Griner is an icon for LGBTQ+ and women of color, who inspires millions
                                    of Americans. However, many were unhappy with his response, saying instead that Biden should have traded Viktor Bout for a
                                    US Marine, who was arrested for "espionage" with no proof provided.
                                </Text>
                                <a className="link mt-5" href="https://www.msn.com/en-us/sports/more-sports/why-was-brittney-griner-arrested-in-russia/ar-AAUH0Eh#:~:text=WNBA%20star%20Brittney%20Griner%20was%20arrested%20in%20Russia,pic.twitter.com%2F1bEkyojFTU%20%E2%80%94%20Bleacher%20Report%20%28%40BleacherReport%29%20March%205%2C%202022">More Info</a>
                                <button className="btn w-full mt-10" onClick={() => { setArticle(0) }}>Return to News Page</button>
                                <div className="h-6"></div>
                            </Content>
                        </Article>
                    </div>
                    <div className={article !== 2 ? "hidden" : ""}>
                        <Article title="Protests in Iran">
                            <Content>
                                <Img src="https://media.cnn.com/api/v1/images/stellar/prod/221208011208-iran-tehran-protests-file.jpg?c=16x9&q=h_720,w_1280,c_fill" />
                                <Text className="mt-10">
                                    Protests in Iran spark again and again as the government tries to suppress the protests with brutal methods. A man named Shekari stabbed a paramilitary force member in the capital, Tehran, and one month later, he was executed by hanging. The first death from execution due to the recent protests.
                                </Text>
                                <Text className="mt-5">
                                    European governments respond with heavy criticism after learning that the execution wasn’t fair due to Shekari not getting a lawyer and without due process. Many people around the world were outraged by this act, including the former President of Iran himself who told the government to be more lenient towards the protesters.
                                </Text>
                                <Text className="mt-5">
                                    Many more people are wanted for execution and many have already died from the regime's abuse of power, this includes Mahsa who was killed for wearing her hijab incorrectly. Iran is currently wanted for an investigation for violations against human rights and many want the regime to be overthrown and replaced with a better one.
                                </Text>
                                <a className="link mt-5" href="https://www.cnn.com/2022/12/08/middleeast/iran-executes-first-protester-intl-hnk">More Info</a>
                                <button className="btn w-full mt-10" onClick={() => { setArticle(0) }}>Return to News Page</button>
                                <div className="h-6"></div>
                            </Content>
                        </Article>
                    </div>
                </Container>
            </main>
        </>
    )
}

export default International