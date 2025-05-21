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

  & > h3 {
    margin-bottom: 24px;

    text-transform: uppercase;

    font-size: 11px;
    font-weight: bolder;
    color: #53ffaa;
  }

  & > p {
    margin-bottom: 24px;

    font-size: 24px;
    font-weight: bolder;
    letter-spacing: -0.26px;
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

background-color: #53FFAA;

border-radius: 50%;

& > img{
    margin-left: auto;
    margin-right: auto;
}
`
