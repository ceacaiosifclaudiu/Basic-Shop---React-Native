import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CartIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={21.428} height={20} {...props}>
    <Path
      data-name="Path 13998"
      d="M0 .714A.714.714 0 0 1 .714 0h2.143a.714.714 0 0 1 .693.542l.579 2.316h16.585a.714.714 0 0 1 .693.887l-2.143 8.571a.714.714 0 0 1-.693.542H5.714a.714.714 0 0 1-.693-.542L2.3 1.429H.714A.714.714 0 0 1 0 .714Zm4.486 3.572 1.786 7.143h11.743L19.8 4.286Zm2.657 11.428a1.429 1.429 0 1 0 1.429 1.429 1.429 1.429 0 0 0-1.429-1.429Zm-2.857 1.429A2.857 2.857 0 1 1 7.143 20a2.857 2.857 0 0 1-2.857-2.857Zm12.857-1.429a1.429 1.429 0 1 0 1.429 1.429 1.429 1.429 0 0 0-1.429-1.429Zm-2.857 1.429A2.857 2.857 0 1 1 17.143 20a2.857 2.857 0 0 1-2.857-2.857Z"
      fillRule="evenodd"
    />
  </Svg>
);

export default CartIcon;
