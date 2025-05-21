import patternMob from "../../assets/images/pattern-divider-mobile.svg";
import patternDesk from "../../assets/images/pattern-divider-desktop.svg";

import dice from "../../assets/images/icon-dice.svg";

import * as SC from "./CardStyled";
import { useScreenSize } from "../../hooks/useSizeScreen";
const Card = () => {
  const { isDesktop } = useScreenSize();

  return (
    <SC.CardCustom>
      <h3>advice # 117</h3>
      <p>
        “It is easy to sit up and take notice, what's difficult is getting up
        and taking action.”
      </p>
      {isDesktop ? <img src={patternDesk} alt="divider" /> : <img src={patternMob} alt="divider" />}

      <SC.DiceCustom>
        <img src={dice} alt="dice" />
      </SC.DiceCustom>
    </SC.CardCustom>
  );
};

export default Card;
