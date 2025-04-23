import * as S from './radioButton.styles';

const RadioButton = ({ children, itemLabel, name, style, handleSelect, isChecked }) => {
  const idolMember = name.split('-');

  return (
    <label
      htmlFor={name}
      css={[S.buttonArea, style, isChecked && S.activeStyle]}
      onClick={handleSelect}
      onKeyDown={handleSelect}
      value={idolMember[1]}
    >
      {children}
      <input type="radio" name={itemLabel} id={name} checked={isChecked} readOnly />
    </label>
  );
};

export default RadioButton;
