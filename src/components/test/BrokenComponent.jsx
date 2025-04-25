const BrokenComponent = () => {
  // 렌더링 중 오류 발생시키기 (undefined 접근)
  const obj = null;
  return <div>{obj.value}</div>; // ❌ TypeError 발생
};

export default BrokenComponent;
