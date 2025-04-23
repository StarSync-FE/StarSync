import nextIcon from '@/assets/icons/next-icon.png';
import addIcon from '@/assets/icons/plus-icon.png';
import prevIcon from '@/assets/icons/prev-icon.png';

import Avatar from '@/components/avatar';
import AvatarButton from '@/components/avatarButton';
import CustomButton from '@/components/customButton';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import * as S from './myPage.styles';

const Button = ({ iconImage, styles }) => {
  return (
    <button type="button" css={[S.arrowButton, styles]}>
      <img src={iconImage === 'prev' ? prevIcon : nextIcon} alt="" />
    </button>
  );
};

const MyPage = () => {
  const idols = useLoaderData();
  const [allIdols, setAllIdols] = useState(idols.list);
  const [myIdol, setMyIdol] = useState([]);
  const [seletedProfiles, setSelectedProfiles] = useState([]);

  const toggleProfile = (idol) => {
    setSelectedProfiles((prev) => {
      const next = {
        ...prev,
        [idol.id]: !prev[idol.id],
      };
      console.log('선택 상태:', next);
      return next;
    });
  };
  const addMyIdols = () => {
    const selectedIds = Object.entries(seletedProfiles)
      .filter(([_, isSelected]) => isSelected)
      .map(([id]) => id);

    const selectedIdols = allIdols.filter((idol) => selectedIds.includes(String(idol.id)));

    // 중복 제거해서 myIdol에 추가
    setMyIdol((prev) => {
      const existingIds = new Set(prev.map((i) => String(i.id)));
      const newAdditions = selectedIdols.filter((idol) => !existingIds.has(String(idol.id)));
      return [...prev, ...newAdditions];
    });

    // 선택 상태 초기화
    setSelectedProfiles({});

    // 전체 아이돌 목록에서 제거
    setAllIdols((prev) => prev.filter((idol) => !selectedIds.includes(String(idol.id))));
  };
  const removeMyIdol = (idolId) => {
    const removed = myIdol.find((idol) => idol.id === idolId);
    if (!removed) return;

    setMyIdol((prev) => prev.filter((idol) => idol.id !== idolId));

    setSelectedProfiles((prev) => {
      const next = { ...prev };
      delete next[idolId];
      return next;
    });

    setAllIdols((prev) => [...prev, removed]);
  };
  return (
    <div css={S.myPageWrapper}>
      <h2 css={S.title}>내가 관심있는 아이돌</h2>
      <section css={S.horizonList}>
        {myIdol.map((idol) => {
          return (
            <div key={idol.id}>
              <AvatarButton imgUrl={idol.profilePicture} removeIdol={() => removeMyIdol(idol.id)} />
              <h3 css={S.idolName}>{idol.name}</h3>
              <p css={S.groupName}>{idol.group}</p>
            </div>
          );
        })}
      </section>
      <h2 css={S.title}>관심 있는 아이돌을 추가해보세요.</h2>
      <Button iconImage={'prev'} styles={S.prev} />
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
        <CustomButton type="button" isRound={true} style={S.customButtonStyle} onClick={addMyIdols}>
          <img src={addIcon} alt="addIcon" css={S.buttonIcon} />
          추가하기
        </CustomButton>
      </div>
      <Button iconImage={'next'} styles={S.next} />
    </div>
  );
};

export default MyPage;
