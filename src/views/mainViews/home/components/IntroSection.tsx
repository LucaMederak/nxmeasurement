import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { wrap } from "popmotion";

//list
import { featuresList } from "@utils/featuresList";

//icons
import * as Icon from "@icons/icons";

//styles
import * as Styled from "./IntroSection.styles";

//animations
import { motion, AnimatePresence } from "framer-motion";
import { fadeAnimation, fadeItem } from "@animations/fade";

//components
import Button from "@components/button/Button";

//images
import { gallery } from "@utils/gallery";

const IntroSection = () => {
  const navigate = useNavigate();

  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, gallery.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const changeSlides = setInterval(() => paginate(1), 8000);
    return () => {
      clearInterval(changeSlides);
    };
  }, [page]);

  return (
    <Styled.IntroContainer>
      <Styled.IntroMainHeadlineWrapper
        variants={fadeAnimation}
        animate="show"
        initial="hidden"
      >
        <motion.h1 variants={fadeItem}>
          Twórz pomiary dla swoich klientów w <span>NXMeasurement</span>
        </motion.h1>
        <motion.p variants={fadeItem}>
          Załóż darmowe konto aby korzystać z aplikacji
        </motion.p>

        <Styled.IntroFeaturesWrapper>
          {featuresList.map(({ id, title }) => (
            <motion.li key={id} variants={fadeItem}>
              <div>
                <span>
                  <Icon.FaCheck />
                </span>
              </div>
              {title}
            </motion.li>
          ))}
        </Styled.IntroFeaturesWrapper>
        <Button onClick={() => navigate("/register")} width="40rem">
          Załóż konto
        </Button>
      </Styled.IntroMainHeadlineWrapper>
      <Styled.SliderWrapper>
        <AnimatePresence initial={false} custom={direction}>
          <Styled.ImageWrapper
            key={page}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.2 } }}
            src={gallery[imageIndex]}
            alt="Pomiary"
          ></Styled.ImageWrapper>
        </AnimatePresence>

        <Styled.SwitchWrapper>
          {gallery.map((image, i) => (
            <Styled.Switch
              key={image}
              activeSwitch={imageIndex == i}
              onClick={() => setPage([i, 0])}
            >
              <button />
            </Styled.Switch>
          ))}
        </Styled.SwitchWrapper>
      </Styled.SliderWrapper>
    </Styled.IntroContainer>
  );
};

export default IntroSection;
