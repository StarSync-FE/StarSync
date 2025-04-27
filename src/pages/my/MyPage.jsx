import nextIcon from '@/assets/icons/next-icon.png';
import addIcon from '@/assets/icons/plus-icon.png';
import prevIcon from '@/assets/icons/prev-icon.png';
import { Avatar } from '@/components/avatar';
import { AvatarButton, CustomButton } from '@/components/button';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import * as S from './myPage.styles';

const Button = ({ iconImage, styles, goToPage }) => {
  return (
    <button type="button" css={[S.arrowButton, styles]} onClick={goToPage}>
      <img src={iconImage === 'prev' ? prevIcon : nextIcon} alt="" />
    </button>
  );
};

const MyPage = () => {
  const { list, nextCursor } = useLoaderData();
  const [allIdols, setAllIdols] = useState(list ?? []);
  const [myIdol, setMyIdol] = useState([]);
  const [selectedProfiles, setSelectedProfiles] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 16;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentIdols = allIdols.slice(startIndex, endIndex);
  const maxPage = Math.ceil(allIdols.length / pageSize);

  useEffect(() => {
    const savedMyIdols = localStorage.getItem('myIdol');
    const savedAllIdols = localStorage.getItem('allIdols');

    const parsedMyIdols = savedMyIdols ? JSON.parse(savedMyIdols) : [];
    const myIdolIds = new Set(parsedMyIdols.map((idol) => String(idol.id)));
    setMyIdol(parsedMyIdols);

    const originalAllIdols = list || [];
    const filtered = originalAllIdols.filter((idol) => !myIdolIds.has(String(idol.id)));

    setAllIdols(filtered);
    localStorage.setItem('allIdols', JSON.stringify(filtered));
  }, [list]);

  const toggleProfile = (idol) => {
    setSelectedProfiles((prev) => ({
      ...prev,
      [idol.id]: !prev[idol.id],
    }));
  };

  const addMyIdols = () => {
    const selectedIds = Object.entries(selectedProfiles)
      .filter(([_, isSelected]) => isSelected)
      .map(([id]) => id);

    const selectedIdols = allIdols.filter((idol) => selectedIds.includes(String(idol.id)));

    setMyIdol((prev) => {
      const existingIds = new Set(prev.map((i) => String(i.id)));
      const newAdditions = selectedIdols.filter((idol) => !existingIds.has(String(idol.id)));
      const updated = [...prev, ...newAdditions];
      localStorage.setItem('myIdol', JSON.stringify(updated));
      return updated;
    });

    setSelectedProfiles({});

    setAllIdols((prev) => {
      const updated = prev.filter((idol) => !selectedIds.includes(String(idol.id)));
      localStorage.setItem('allIdols', JSON.stringify(updated));
      return updated;
    });
  };

  const removeMyIdol = (id) => {
    setMyIdol((prev) => {
      const updated = prev.filter((idol) => idol.id !== id);
      const removed = prev.find((idol) => idol.id === id);
      localStorage.setItem('myIdol', JSON.stringify(updated));

      if (removed) {
        setAllIdols((prevAll) => {
          const withoutRemoved = prevAll.filter((idol) => idol.id !== removed.id);
          const updatedAll = [...withoutRemoved, removed];
          localStorage.setItem('allIdols', JSON.stringify(updatedAll));
          return updatedAll;
        });
      }

      return updated;
    });

    setSelectedProfiles((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  return (
    <div css={S.myPageWrapper}>
      <h2 css={S.title}>내가 관심있는 아이돌</h2>
      <section css={[S.horizonList, S.scrollStyle]}>
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
      <div css={S.idolListWrapper}>
        <Button
          iconImage={'prev'}
          styles={S.prev}
          goToPage={() => {
            if (currentPage > 1) {
              setCurrentPage((prev) => prev - 1);
            }
          }}
        />
        <section css={S.idolList}>
          {currentIdols.map((idol) => {
            return (
              <div key={idol.id} css={S.allProfileSize}>
                <Avatar
                  imgUrl={idol.profilePicture}
                  onSelectToggle={() => toggleProfile(idol)}
                  isSelected={selectedProfiles[idol.id]}
                />
                <h3 css={S.idolName}>{idol.name}</h3>
                <p css={S.groupName}>{idol.group}</p>
              </div>
            );
          })}
        </section>
        <Button
          iconImage={'next'}
          styles={S.next}
          goToPage={() => {
            if (currentPage < maxPage) {
              setCurrentPage((prev) => prev + 1);
            }
          }}
        />
      </div>
      <div css={S.customButtonWrapper}>
        <CustomButton type="button" isRound={true} style={S.customButtonStyle} onClick={addMyIdols}>
          <img src={addIcon} alt="addIcon" css={S.buttonIcon} />
          추가하기
        </CustomButton>
      </div>
    </div>
  );
};

export default MyPage;
