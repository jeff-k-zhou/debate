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

const National: NextPage = () => {
    const [article, setArticle] = useState(0)
    return (
        <>
            <Head>
                <title>The Times - National News</title>
            </Head>

            <main className="overflow-x-hidden">
                <Container>
                    <Navbar></Navbar>
                    <div className={article !== 0 ? "hidden" : "flex flex-col items-center"}>
                        <h1 className="text-7xl mt-5">National News</h1>
                        <Content className="w-[90%]">
                            <Card title="Same-Sex Marriage Bill" action={
                                <button className="btn" onClick={() => { setArticle(1) }}>Read Article</button>
                            } src="https://images-ext-1.discordapp.net/external/gD1TZKqwvJlvbDPi_qu1hW6Ru_SD2w0ug4NaFUksCvI/%3Fc%3D16x9%26q%3Dw_800%2Cc_fill/https/media.cnn.com/api/v1/images/stellar/prod/221213162831-01-biden-signs-respect-for-marriage-act-1213.jpg">
                                Biden is pushing for the signing of a same-sex marriage law, which will grant rights to same-sex couples.
                            </Card>
                            <Card title="New Immigration Framework Pushed Back" action={
                                <button className="btn" onClick={() => { setArticle(2) }}>Read Article</button>
                            } src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA12aDTI.img?w=768&h=432&m=6">
                                A new immigration framework that claims to provide an easier pathway to citizenship for illegal immigrants in the US is being opposed by House Democrats as an "assault on asylum seekers".
                            </Card>
                        </Content>
                    </div>
                    <div className={article !== 1 ? "hidden" : ""}>
                        <Article title="Biden Passes Same-Sex Marriage Bill">
                            <Content>
                                <Img className="w-full" src="https://images-ext-1.discordapp.net/external/gD1TZKqwvJlvbDPi_qu1hW6Ru_SD2w0ug4NaFUksCvI/%3Fc%3D16x9%26q%3Dw_800%2Cc_fill/https/media.cnn.com/api/v1/images/stellar/prod/221213162831-01-biden-signs-respect-for-marriage-act-1213.jpg" />
                                <Text className="mt-10">
                                    On December 13th, Joe Biden signs a law that protects same-sex and interracial marriages. After several decades of discrimination, this laws makes it so every state has to recognize and treat these marriages as legal marriages.
                                </Text>
                                <Text className="mt-5">
                                    This law now officially voids the DOMA law and shows that many people around the nation support the LGBTQ rights and this law with 68% of people supporting it. Biden has warned Justice Thomas that Roe v Wade was leading them in a dangerous path for them when it comes to marriage equality. He later talks about how he supports equality in marriages and that he’s evolved as a politician for when he was a Senator, he was cautious when it came to LGBT issues but now is comfortable with them. He became a heavy supporter of them and invited prominent members of the LGBT community during the passing of the law.
                                </Text>
                                <button className="btn w-full mt-10" onClick={() => { setArticle(0) }}>Return to News Page</button>
                                <div className="h-6"></div>
                            </Content>
                        </Article>
                    </div>
                    <div className={article !== 2 ? "hidden" : ""}>
                        <Article title="Immigration Framework Opposed">
                            <Content>
                                <Img className="w-full" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA12aDTI.img?w=768&h=432&m=6" />
                                <Text className="mt-10">
                                    Republicans are pushing a last-minute immigration framework that would increase border security funding and would give
                                    two million illegal immigrants a pathway to US Citizenship. Both immigration hawks and Democrats oppose this framework for different reasons.
                                </Text>
                                <Text className="mt-5">
                                    Democrats claim that the new immigration policy is an "attack on asylum seekers" because of its heavier border control policies
                                    and greater funding for deportation resources. "The proposed plan would reinstate the Title 42 expulsion policy while significantly increasing funding for border security. It bolsters a deal to further militarize the border and lacks necessary accountability measures that comprehensive immigration reform would have delivered,"
                                    Jose Correra, a House Democrat, said.
                                </Text>
                                <Text className="mt-5">
                                    Immigration hawks, on the other hand, dislike the new policy&apos;s amnesty towards current illegal immigrants. They believe that all illegal immigrants should
                                    be deported. It will be hard to garner support for this plan in both parties as Title 42, which expels immigrants at the border
                                    due to COVID-19 risks, will expire in the following two weeks.
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

export default National