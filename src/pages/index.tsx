import Head from "next/head";
import { useEffect, useState } from "react";
import { Noto_Sans_KR } from "next/font/google";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";
import Script from "next/script";

const Title = dynamic(() => import("@/components/Title"), { ssr: false });
const Gretting = dynamic(() => import("@/components/Gretting"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Location = dynamic(() => import("@/components/Location"), { ssr: false });
const Share = dynamic(() => import("@/components/Share"), { ssr: false });

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: [],
  style: "normal",
});

const Footer = styled("footer", {
  background: "#D7CCC8",
  backgroundImage: "url(./assets/GroovePaper.png)",
  opacity: 0.6,
  textAlign: "center",
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "-webkit-box-align": "center",
  "-webkit-box-pack": "center",
});

export default function Home() {
  const [date, setDate]=useState(JsonData.date);
  const [location,setLocation]=useState(JsonData.location);
  
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta content="송종건❤이옥은 결혼합니다" name="Title" />
        <meta
          content={date}
          name="Description"
        />
        <meta content={location} name="Keyword" />
        <meta property="og:title" content="송종건❤이옥은 결혼합니다" />
        <meta
          property="og:description"
          content="2024년 10월 13일 일요일 오전 11시 30분 롯데호텔서울 무궁화"
        />
        <meta name="theme-color" content="#BCAAA4" />
        <title>송종건❤이옥은 결혼합니다</title>
      </Head>
      <main className={`${notoSansKR.className}`}>
        <Script src="https://developers.kakao.com/sdk/js/kakao.min.js"></Script>
        <Title data={JsonData} />
        <Gretting data={JsonData} />
        <Gallery />
        <Location />
      </main>
    </>
  );
}
