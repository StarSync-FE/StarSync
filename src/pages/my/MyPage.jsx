import { ArrowButton } from '@/components/arrowButton';
import { Avatar } from '@/components/avatar';
import { AvatarButton } from '@/components/avatarButton';
import { CustomButton } from '@/components/customButton';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import * as S from './myPage.styles';

const MyPage = () => {
  const { list, nextCursor } = useLoaderData();
  const [allIdols, setAllIdols] = useState(list ?? []);
  const [myIdol, setMyIdol] = useState([]);
  const [selectedProfiles, setSelectedProfiles] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(16);
  // const pageSize = 16;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentIdols = allIdols.slice(startIndex, endIndex);
  const maxPage = Math.ceil(allIdols.length / pageSize);
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 743) {
        setScreenSize('mobile');
      } else if (width <= 1279) {
        setScreenSize('tablet');
      } else if (width <= 1919) {
        setScreenSize('desktop');
      } else {
        setScreenSize('desktopL');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize === 'mobile') {
      setPageSize(6);
    } else if (screenSize === 'tablet') {
      setPageSize(12);
    } else if (screenSize === 'desktop') {
      setPageSize(16);
    } else {
      setPageSize(20);
    }
    console.log(screenSize);
  }, [screenSize]);
  useEffect(() => {
    const savedMyIdols = localStorage.getItem('myIdol');

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
      <h2 css={[S.title, S.myIdolTitle]}>내가 관심있는 아이돌</h2>
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

      <h2 css={[S.title, S.allIdolTitle]}>관심 있는 아이돌을 추가해보세요.</h2>
      <div css={S.idolListWrapper}>
        {screenSize !== 'mobile' && currentIdols.length > 0 ? (
          <ArrowButton
            direction={'left'}
            styles={[S.arrowButton, S.prev]}
            onButtonClick={() => {
              if (currentPage > 1) {
                setCurrentPage((prev) => prev - 1);
              }
            }}
          />
        ) : null}

        <section css={[S.idolList]}>
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
        {screenSize !== 'mobile' && currentIdols.length > 0 ? (
          <ArrowButton
            direction="right"
            styles={[S.arrowButton, S.next]}
            onButtonClick={() => {
              if (currentPage < maxPage) {
                setCurrentPage((prev) => prev + 1);
              }
            }}
          />
        ) : null}
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
