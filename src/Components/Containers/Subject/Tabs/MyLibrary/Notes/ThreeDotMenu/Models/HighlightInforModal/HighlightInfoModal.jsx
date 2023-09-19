import React from "react";
import {
  Wrapper,
  Typorgraphy,
} from "./HighlightInfoModal.style";
import palette from '../../../../../../../../../config/palette.js'

const HighlightInfoModal = ( ) => {
  return (
    <div>
      <Wrapper>
            <Typorgraphy color={palette.colors.unselected}>
            <strong>Please Select One Line At A Time</strong>
        </Typorgraphy>
      </Wrapper>
    </div>
  );
};

export default HighlightInfoModal;
