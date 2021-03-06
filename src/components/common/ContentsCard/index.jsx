import React from "react";
import { BookmarkWrapper, ImgWrapper, StyledRoot, Title } from "./style";
import { ReactComponent as Mark } from "components/common/assets/icon/bookmark_ic-1.svg";
import { ReactComponent as UnMark } from "components/common/assets/icon/bookmark_ic.svg";

function ContentsCard({ CardInfo, onClick }) {
  const { id, thumbnail, title, isBookmarked } = CardInfo;

  return (
    <StyledRoot>
      <ImgWrapper>
        <img src={thumbnail} alt="썸네일" />
      </ImgWrapper>
      <Title>{title}</Title>.
      <BookmarkWrapper>
        {isBookmarked ? (
          <Mark onClick={onClick} />
        ) : (
          <UnMark onClick={onClick} />
        )}
      </BookmarkWrapper>
    </StyledRoot>
  );
}

export default ContentsCard;
