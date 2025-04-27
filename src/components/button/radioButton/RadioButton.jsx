import * as S from './radioButton.styles';

const RadioButton = ({ children, itemLabel, style, name, handleSelect }) => {
  const idolMember = name.split('-');

  return (
    <label
      htmlFor={name}
      css={[S.buttonArea, style]}
      onClick={handleSelect}
      onKeyDown={handleSelect}
      value={idolMember[1]}
    >
      {children}
      <input type="radio" name={itemLabel} id={name} />
    </label>
  );
};

export default RadioButton;
