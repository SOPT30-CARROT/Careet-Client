import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 44rem;
  height: 34.8rem;
  font-family: "AppleSDGothicNeoB00";
  margin-bottom: 3.1rem;
`;

export const ImgWrapper = styled.div`
  & > img {
    width: 41.8rem;
    height: 23.2rem;
  }
`;

export const Title = styled.div`
  color: ${colors.black};
  font-size: 22px;
  letter-spacing: -1.5%;
  line-height: 130%;
  margin-top: 1.6rem;
  width: 40.1rem;
  height: 6.2rem;
  transition: 0.3s;
  &:hover {
    color: ${colors.orange};
    transition: 0.5s;
  }
`;

export const BookmarkWrapper = styled.div`
  svg {
    width: auto;
    display: block;
    margin: 0 0 0 auto;
    padding-right: 2rem;
  }
`;
