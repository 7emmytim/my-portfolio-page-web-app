import React from 'react';
import { Link } from 'react-router-dom';
import {
  InfoSec, InfoRow,
  TextWrapper, TopLine, Heading,
  Subtitle, Img
} from './InfoSection.elements';

function InfoSection({
  lightBg, topLine,
  lightTopLine, lightText, lightTextDesc,
  textWrapperAlign, headline, description,
  buttonLabel, btnShow, btnLink, img, bRadius,
  alt, imgStart, start, hImage
}) {
  return (
    <>
      <InfoSec className="container py-5 mb-3" lightBg={lightBg}>
        <InfoRow className="row m-0" imgStart={imgStart}>
          <div className="col-lg-6">
            <TextWrapper textWrapperAlign={textWrapperAlign}>
              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
              <Heading lightText={lightText} className="display-4 my-3">{headline}</Heading>
              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              {btnShow ? (
                <Link to={btnLink}>
                  <button className="btn btn-primary py-3 px-4 btn-lg mb-5 mt-3" >
                    {buttonLabel}
                  </button>
                </Link>
              ) : null}
            </TextWrapper>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <Img src={img} alt={headline} bRadius={bRadius} hImage={hImage} />
          </div>
        </InfoRow>
      </InfoSec>
    </>
  );
}

export default InfoSection;
