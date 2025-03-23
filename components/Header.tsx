"use client";

import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

import UserIcon from "@/public/MyIcon.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  box-shadow: 1px 1px 4px rgb(0 0 0 / 40%);
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 10px;
`;

const NameText = styled.p`
  font-size: 3.5em;
  font-weight: bold;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`;

const UserIconImage = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid #fff;
  margin: 0 10px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`;

const HomeLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 2em;
  cursor: pointer;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const BlogLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 2em;
  cursor: pointer;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const TwitterLink= styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 2em;
  cursor: pointer;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const router = useRouter();
  const twitterUrl = process.env.NEXT_PUBLIC_TWITTER_URL || "";

  return (
    <Wrapper>
      <NameContainer>
        <NameText>Mittiii</NameText>
      </NameContainer>
      <RightContainer>
        <LinkContainer>
          <HomeLink onClick={() => router.push("/Home")}>Home</HomeLink>
          <BlogLink onClick={() => router.push("/Blog")}>Blog</BlogLink>
          <TwitterLink href={twitterUrl} target="_blank" rel="noopener noreferrer">X(Twitter)</TwitterLink>
        </LinkContainer>
        <IconContainer>
          <UserIconImage src={UserIcon} alt="ユーザーアイコン" />
        </IconContainer>
      </RightContainer>
    </Wrapper>
  );
};

export default Header;
