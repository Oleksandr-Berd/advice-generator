import patternMob from "../../assets/images/pattern-divider-mobile.svg"
import dice from "../../assets/images/icon-dice.svg"

import * as SC from "./CardStyled"
const Card = () => {
    return ( 
        <SC.CardCustom>
            <h3>advice # 117</h3>
            <p>“It is easy to sit up and take notice, what's difficult is getting up and taking action.”</p>
            <img src={patternMob} alt="divider" />
            <SC.DiceCustom>
            <img src={dice} alt="dice" />
            </SC.DiceCustom>
        </SC.CardCustom>
     );
}
 
export default Card;