import ContentsCard from "components/common/ContentsCard";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from "api/index";

import { ButtonWrapper, StyledRoot, StyledSlider } from "./style";
import { ReactComponent as PrevArrow } from "components/common/assets/icon/arrow_l.svg";
import { ReactComponent as NextArrow } from "components/common/assets/icon/arrow_r.svg";

function FavePlace() {
  const [faveCardsInfo, setFaveCardsInfo] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await api.mock.fetchUpperSlider();
      setFaveCardsInfo(data);
    })();
  }, []);

  const toggleBookmark = (id) => {
    const newFaveCardsInfo = faveCardsInfo.map((faveCard) => {
      if (id === faveCard.id) faveCard.isBookmarked = !faveCard.isBookmarked;
      return faveCard;
    });
    setFaveCardsInfo(newFaveCardsInfo);
  };

  const slickRef = useRef(null);
  const movePrev = useCallback(() => slickRef.current.slickPrev(), []);
  const moveNext = useCallback(() => slickRef.current.slickNext(), []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    speed: 300,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  return (
    <StyledRoot>
      <div>
        <h3>요즘 사람들이 좋아하는 공간의 비밀</h3>
        <ButtonWrapper>
          <button onClick={movePrev}>
            <PrevArrow />
          </button>
          <button onClick={moveNext}>
            <NextArrow />
          </button>
        </ButtonWrapper>
      </div>
      <StyledSlider ref={slickRef} {...settings}>
        {faveCardsInfo.map((faveCard) => {
          return (
            <div key={faveCard.id}>
              <ContentsCard
                faveCard={faveCard}
                onClick={() => toggleBookmark(faveCard.id)}
              />
            </div>
          );
        })}
      </StyledSlider>
    </StyledRoot>
  );
}

export default FavePlace;