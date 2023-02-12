import { useCallback, useEffect, useRef, useState } from "react";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Typography } from "components/ui";

import { useTranslation } from "hooks";

import { ICONS } from "utils/constants";

const breakpoints = {
  375: {
    spaceBetween: 15,
    slidesPerView: 1
  },
  400: {
    spaceBetween: 15,
    slidesPerView: 1.25
  },
  460: {
    spaceBetween: 15,
    slidesPerView: 1.5
  },
  576: {
    spaceBetween: 15,
    slidesPerView: 2
  },
  767: {
    spaceBetween: 15,
    slidesPerView: 2.5
  },
  992: {
    spaceBetween: 30,
    slidesPerView: 3
  },
  1300: {
    spaceBetween: 30,
    slidesPerView: 4
  },
  1800: {
    spaceBetween: 30,
    slidesPerView: 5
  }
};

export const Saves = () => {
  const t = useTranslation();

  // for getting index of current slide
  const swiperRef = useRef(null);
  const [indexOfCurrentSlide, setIndexOfCurrentSlide] = useState(0);

  const updateIndex = useCallback(() => setIndexOfCurrentSlide(swiperRef.current.swiper.realIndex), []);

  // Add eventlisteners for swiper after initializing
  useEffect(() => {
    if (!swiperRef) return;

    const swiperInstance = swiperRef.current?.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChange", updateIndex);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateIndex);
      }
    };
  }, [updateIndex]);

  return (
    <div className="saves">
      <div className="saves__slider">
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          navigation={{
            prevEl: ".saves__navigation-prev",
            nextEl: ".saves__navigation-next"
          }}
          spaceBetween={30}
          slidesPerView={5}
          wrapperTag="ul"
          centeredSlides={true}
          breakpoints={breakpoints}
        >
          {t.pages.home.saves.items.map((item) => (
            <SwiperSlide className="saves__slide" key={item.id} tag="li">
              <div className="saves__slide-img">
                <picture>
                  <source srcSet={`img/saves/img${item.id}@1x.avif 1x, img/saves/img${item.id}@2x.avif 2x`} type="image/avif" />
                  <source srcSet={`img/saves/img${item.id}@1x.webp 1x, img/saves/img${item.id}@2x.webp 2x`} type="image/webp" />
                  <img
                    src={`img/saves/img${item.id}@1x.png`}
                    srcSet={`img/saves/img${item.id}@2x.png 2x`}
                    width="400"
                    height="345"
                    alt={item.title}
                    loading="lazy"
                  />
                </picture>
                <Typography tag="h2" variant="h4" color="white" className="saves__slide-title">
                  {item.title}
                </Typography>
              </div>
              <div className="saves__slide-bg">
                <img src={`img/saves/img${item.id}-white.svg`} width="400" height="345" alt="White background" loading="lazy" />
                <div className="saves__slide-bg-ghost">
                  <img src={`img/saves/img${item.id}-bg.svg`} width="400" height="345" alt="Ghost background" loading="lazy" />
                </div>
              </div>
              <div className="saves__slide-info">
                <Typography tag="h2" variant="h4" center className="saves__slide-title">
                  {item.title}
                </Typography>
                <p className="saves__slide-text">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="saves__navigation">
        <button className="saves__navigation-prev">{ICONS.shevronLeft}</button>
        <div className="saves__navigation-count">
          <span className="saves__navigation-current">{indexOfCurrentSlide + 1}</span> <span>/ {t.pages.home.saves.items.length}</span>
        </div>
        <button className="saves__navigation-next">{ICONS.shevronRight}</button>
      </div>
    </div>
  );
};
