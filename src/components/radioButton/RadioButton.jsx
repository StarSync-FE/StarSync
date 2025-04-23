import * as S from './radioButton.styles';

const RadioButton = ({ children, itemLabel, style, name, handleSelect, isChecked }) => {
  const idolMember = name.split('-');

  return (
    <label
      htmlFor={name}
      css={[S.buttonArea, isChecked && style]}
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
