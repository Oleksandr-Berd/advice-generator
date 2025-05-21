import styled from "@emotion/styled";

export const CardCustom = styled.div`
  position: relative;

  display: inline-block;

  padding-top: 40px;
  padding-bottom: 64px;
  padding-left: 24px;
  padding-right: 24px;

  margin-left: 16px;
  margin-right: 16px;

  background-color: #313a48;
  color: #cee3e9;
  border-radius: 10px;

  @media (min-width: 1280px) {
    margin: 0;
    padding-left: 48px;
    padding-right: 48px;
  }

  & > h3 {
    margin-bottom: 24px;

    text-transform: uppercase;

    font-size: 11px;
    font-family: "Manrope";
    font-weight: bolder;
    color: #53ffaa;
    letter-spacing: 3.46px;

    @media (min-width: 1280px) {
      font-size: 13px;
    }
  }

  & > p {
    margin-bottom: 24px;

    font-size: 24px;
    font-family: "Manrope";
    font-weight: bolder;
    letter-spacing: -0.26px;

    @media (min-width: 1280px) {
      width: 400px;

      margin-bottom: 40px;
      margin-left: auto;
      margin-right: auto;

      font-size: 28px;
    }
  }
`;

export const DiceCustom = styled.div`
  position: absolute;

  left: 50%;
  bottom: 0;

  transform: translateX(-50%) translateY(50%);

  width: 64px;
  height: 64px;

  align-content: center;

  background-color: #53ffaa;

  border-radius: 50%;
transition: box-shadow 0.3s linear;

&:active, &:hover, &:focus{
    box-shadow: 0 0 10px #53ffaa, 0 0 20px #53ffaa88, 0 0 30px #53ffaa66;
transition: box-shadow 0.3s linear;
    cursor: pointer;
}

  & > img {
    margin-left: auto;
    margin-right: auto;
  }
`;
