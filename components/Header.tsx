"use client";

import styled from "styled-components";
import Image from "next/image";

import UserIcon from "@/public/MyIcon.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  background-color: #000;
  color: #fff;
  box-shadow: 1px 1px 4px rgb(0 0 0 / 40%);
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserIconImage = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid #fff;
  margin: 0 10px
`;

const Header = () => {
  return (
    <Wrapper>
      <UserContainer>
        <UserIconImage
          src={UserIcon}
          alt="ユーザーアイコン"
        />
      </UserContainer>
    </Wrapper>
  );
};

export default Header;
