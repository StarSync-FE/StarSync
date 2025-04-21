import Avatar from '@/components/avatar';
import AvatarButton from '@/components/avatarButton';
import CustomButton from '@/components/customButton';
import mockData from '@/data/mockData';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import * as S from './myPage.styles';
const MyPage = () => {
  const idols = useLoaderData(); // 여기서 데이터 받음
  const [myIdol, setMyIdol] = useState([]);
  const [allIdols, setAllIdols] = useState(idols.list);

  const addMyIdol = (idol) => {
    console.log(idol);
    setMyIdol([...myIdol, idol]);
  };

  // useEffect(() => {
  //   allIdols.filter((idol, index, arr) => {
  //     return !myIdol.some((selected) => selected.id === idol.id);
  //   });
  // }, [myIdol, allIdols]);

  return (
    <div>
      <h2>내가 관심있는 아이돌</h2>
      <section css={S.horizonList}>
        {myIdol.map((idol) => {
          return (
            <div key={idol.id}>
              <AvatarButton size={6} imgUrl={idol.profilePicture} />
              <h3 css={S.idolName}>{idol.name}</h3>
              <p css={S.groupName}>{idol.group}</p>
            </div>
          );
        })}
      </section>
      <h2>관심 있는 아이돌을 추가해보세요.</h2>
      <section>
        {allIdols.map((idol) => {
          return (
            <div key={idol.id}>
              <Avatar imgUrl={idol.profilePicture} onSelectToggle={() => addMyIdol(idol)} />
              <h3 css={S.idolName}>{idol.name}</h3>
              <p css={S.groupName}>{idol.group}</p>
            </div>
          );
        })}
      </section>
      <CustomButton>추가하기</CustomButton>
    </div>
  );
};

export default MyPage;
