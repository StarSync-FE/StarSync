/** @jsxImportSource @emotion/react */
import * as S from './radioButton.styles';
const RadioButton = ({ children, itemLabel, isSelected, style }) => {
  return (
    <label htmlFor={itemLabel} css={[S.buttonArea, style]}>
      {children}
      <input type="radio" name={itemLabel} />
    </label>
  );
};

export default RadioButton;
