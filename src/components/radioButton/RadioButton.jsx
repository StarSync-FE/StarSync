import { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './radioButton.styles';

const RadioButton = ({ children, itemLabel, name, isSelected, style }) => {
  return (
    <>
      <label htmlFor={name} css={[S.buttonArea, style]}>
        {children}
        <input type="radio" name={itemLabel} id={name} />
      </label>
    </>
  );
};

export default RadioButton;
