import { styled } from "@stitches/react";
import { Divider, Typography } from 'antd';

const { Paragraph } = Typography;


const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Image = styled("img", {
  width: "75%",
  maxWidth: 1024,
});

export default function Location() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Paragraph>
        서울 중구 을지로 30 롯데호텔서울 본관 38층</Paragraph>
        <Paragraph>2호선 을지로입구역 출구 113m</Paragraph>
        <Paragraph>로비 도착시 좌측의 무궁화 전용 엘레베이터를</Paragraph>
        <Paragraph>이용하시면 보다 편안히 오실 수 있습니다.
      </Paragraph>
      <Image src="./assets/LocationMap.png" />
    </Wrapper>
  );
}
