import React from 'react';
import { Link } from 'react-router-dom';
import {
  InfoSec, InfoRow, InfoColumn,
  TextWrapper, TopLine, Heading,
  Subtitle, ImgWrapper, Img, Button
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
      <InfoSec lightBg={lightBg}>
        <div className="container">
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper textWrapperAlign={textWrapperAlign}>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText} className="display-4 my-3">{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                {btnShow ? (
                  <Link to={btnLink}>
                    <Button className="mb-5 mt-3" >
                      {buttonLabel}
                    </Button>
                  </Link>
                ) : null}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} bRadius={bRadius} hImage={hImage} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </div>
      </InfoSec>
    </>
  );
}

export default InfoSection;
