import styled from 'styled-components';

export const InfoSec = styled.div`
  padding: 100px 60px;
  height: auto;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};

@media screen and (max-width: 768px) {
  padding: 50px 15px;
}
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ImgWrapper = styled.div`
  width: 80%;
  display: flex;
  margin: auto;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
  border-radius: ${({ bRadius }) => (bRadius ? '50%' : '0')};
  margin: 0 auto;
  /* width: 100%; */
  width: ${({ hImage }) => (hImage ? '100%' : '100%')};
`;

export const TextWrapper = styled.div`
  margin: auto;
  text-align: ${({ textWrapperAlign }) => (textWrapperAlign ? 'left' : 'right')};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#ffce14' : '#ffce14')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 1.4px;
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

export const Button = styled.button`
  background-color: #4B59F7;
  padding: 12px 64px;
  color: #fff;
  font-size: 20px;
  outline: none;
  border: none;
  /* width: auto; */
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background-color: #0467FB;
  }
`
