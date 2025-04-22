import addIcon from '@/assets/icons/plus-icon.png';
import Avatar from '@/components/avatar';
import AvatarButton from '@/components/avatarButton';
import CustomButton from '@/components/customButton';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import * as S from './myPage.styles';
const MyPage = () => {
  const idols = useLoaderData(); // 여기서 데이터 받음
  const [allIdols, setAllIdols] = useState(idols.list);
  const [myIdol, setMyIdol] = useState([]);
  const [seletedProfiles, setSelectedProfiles] = useState([]);

  const toggleProfile = (idol) => {
    setSelectedProfiles((prev) => ({
      ...prev,
      [idol.id]: !prev[idol.id],
    }));
    setMyIdol([...myIdol, idol]);
  };
  return (
    <div css={S.myPageWrapper}>
      <h2 css={S.title}>내가 관심있는 아이돌</h2>
      <section css={S.horizonList}>
        {myIdol.map((idol) => {
          return (
            <div key={idol.id}>
              <AvatarButton imgUrl={idol.profilePicture} />
              <h3 css={S.idolName}>{idol.name}</h3>
              <p css={S.groupName}>{idol.group}</p>
            </div>
          );
        })}
      </section>
      <h2 css={S.title}>관심 있는 아이돌을 추가해보세요.</h2>
      <div css={S.idolListWrapper}>
        <section css={S.idolList}>
          {allIdols.map((idol) => {
            return (
              <div key={idol.id} css={S.allProfileSize}>
                <Avatar
                  imgUrl={idol.profilePicture}
                  onSelectToggle={() => toggleProfile(idol)}
                  isSelected={seletedProfiles[idol.id]}
                />
                <h3 css={S.idolName}>{idol.name}</h3>
                <p css={S.groupName}>{idol.group}</p>
              </div>
            );
          })}
        </section>
        <CustomButton type="button" isRound={true} style={S.customButtonStyle}>
          <img src={addIcon} alt="addIcon" css={S.buttonIcon} />
          추가하기
        </CustomButton>
      </div>
    </div>
  );
};

export default MyPage;
