import { type NextPage } from "next"
import Head from "next/head"
import Navbar from "./components/_navbar"
import Container from "./components/_container"
import { useState } from "react"
import Content from "./components/_content"
import Card from "./components/_card"
import Article from "./components/_article"
import Text from "./components/_text"
import Img from "./components/_img"

const Local: NextPage = () => {
    const [article, setArticle] = useState(0)
    return (
        <>
            <Head>
                <title>The Times - Local News</title>
            </Head>

            <main className="overflow-x-hidden">
                <Container>
                    <Navbar></Navbar>
                    <div className={article !== 0 ? "hidden" : "flex flex-col items-center"}>
                        <h1 className="text-7xl mt-5">Local News</h1>
                        <Content className="w-[90%]">
                            <Card title="Carrol ISD Rolls Back Protection for Minorities" action={
                                <button className="btn" onClick={() => { setArticle(1) }}>Read Article</button>
                            } src="https://media.wfaa.com/assets/WFAA/images/3558e1f1-34f4-4bba-8381-3cb65da1ec35/3558e1f1-34f4-4bba-8381-3cb65da1ec35_1920x1080.jpg">
                                In a five to one vote, the Carrol ISD board of trustees rolled back protection for students based on race, religion,
                                sexuality, and gender.
                            </Card>
                            <Card title="New Record Set in FISD" action={
                                <button className="btn" onClick={() => { setArticle(2) }}>Read Article</button>
                            } src="https://www.lovethesat.com/wp-content/uploads/2017/04/dt.common.streams.StreamServer.jpg">
                               119 Frisco ISD Students Become National Merit Scholarship Semifinalists, a record high for FISD.
                            </Card>
                        </Content>
                    </div>
                    <div className={article !== 1 ? "hidden" : ""}>
                        <Article title="Protection Rolled Back for Minorities">
                            <Content>
                                <Img className="w-full" src="https://media.wfaa.com/assets/WFAA/images/3558e1f1-34f4-4bba-8381-3cb65da1ec35/3558e1f1-34f4-4bba-8381-3cb65da1ec35_1920x1080.jpg" />
                                <Text className="mt-10">
                                    Recently, in Southlake Texas, Carroll ISD changed its code of conduct, with the board having a 5-1 vote in favor of changing it, and rolled back its protection for students based on their gender, sexuality, and even religion.
                                </Text>
                                <Text className="mt-5">
                                    Many students and even parents are arguing against this change and want them to revoke the change. Many parents are saying that the new change is going to make their children feel excluded and defected. Others say that the rule makes it so it rejects LGBT members and non-Christians and discriminates against all who don’t fit in with other students. Currently, they are under 6 federal civil rights investigations and may be forced to revoke the change.
                                </Text>
                                <button className="btn w-full mt-10" onClick={() => { setArticle(0) }}>Return to News Page</button>
                                <div className="h-6"></div>
                            </Content>
                        </Article>
                    </div>
                    <div className={article !== 2 ? "hidden" : ""}>
                        <Article title="New Frisco ISD Record">
                            <Content>
                                <Img className="w-full" src="https://www.lovethesat.com/wp-content/uploads/2017/04/dt.common.streams.StreamServer.jpg" />
                                <Text className="mt-10">
                                  Recently, a record number of 119 students in FISD were named National Merit Scholarship semi-finalists. Nationa Merit semi-finalists represent the top 1% of students in the nation.
                                </Text>
                                <Text className="mt-5">
                                    “It wasn’t so long ago that the District was celebrating our 26 National Merit Semifinalists in 2014,” Chris Clark, the director of academic programs in FISD, said. Being a National Merit Scholar
                                    is a huge honor for students and it provides great benefits when applying for colleges. The PSAT is the qualifying exam for National Merit, and the top scores will automatically
                                    be entered into the program.
                                </Text>
                                <Text className="mt-5">
                                    National Merit provides some money for college tuition, but the biggest benefit is an automatic full scholarship into almost every single state school in the US, with the notable
                                    exception of California. Students who make it into the semi-finals and the finals are some of the top students in the nation and many colleges want students like that.
                                </Text>
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

export default Local