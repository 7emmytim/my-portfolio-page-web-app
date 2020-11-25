import styled from 'styled-components';

export const InfoSec = styled.div`
  height: auto;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`;

export const InfoRow = styled.div`
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const Img = styled.img`
  border-radius: ${({ bRadius }) => (bRadius ? '50%' : '0')};
  width: ${({ hImage }) => (hImage ? '100%' : '100%')};
`;

export const TextWrapper = styled.div`
  margin: auto;
  text-align: ${({ textWrapperAlign }) => (textWrapperAlign ? 'left' : 'right')};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#ffce14' : '#ffce14')};
  font-size: 1.3rem;
  line-height: 23px;
  font-weight: 400;
  letter-spacing: 1.4px;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 20px;
  }
`;

export const Heading = styled.h1`
  font-size: 3rem;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  line-height: 24px;
  letter-spacing: 1px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#ffffff85' : '#51585f')};
`;

