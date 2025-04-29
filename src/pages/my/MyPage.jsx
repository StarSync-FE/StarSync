import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Avatar } from '@/components/avatar';
import { ArrowButton, AvatarButton, CustomButton } from '@/components/button';
import addIcon from '@/assets/icons/plus-icon.png';
import * as S from './myPage.styles';
import { showAlert } from '@/utils/alert/alertController';

const MyPage = () => {
  const { list, nextCursor } = useLoaderData();
  const [allIdols, setAllIdols] = useState(list ?? []);
  const [myIdol, setMyIdol] = useState([]);
  const [selectedProfiles, setSelectedProfiles] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(16);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentIdols = allIdols.slice(startIndex, endIndex);
  const maxPage = Math.ceil(allIdols.length / pageSize);
  const [screenSize, setScreenSize] = useState('desktop');

  const DEFAULT_OG_IMAGE = 'https://www.starsync.wiki/default-og.png';

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 743) {
        setScreenSize('mobile');
      } else if (width <= 981) {
        setScreenSize('tablet');
      } else if (width <= 1134) {
        setScreenSize('tabletWide');
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

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setCurrentPage(1);
  }, [allIdols]);

  useEffect(() => {
    if (screenSize === 'mobile') {
      setPageSize(30);
    } else if (screenSize === 'tablet') {
      setPageSize(8);
    } else {
      setPageSize(16);
    }
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
    <>
      <title>StarSync - 마이페이지</title>
      <meta name="description" content="별처럼 연결되는 우리, 모든 별이 하나로 이어지는 순간" />
      <meta name="keywords" content="StarSync, 스타싱크, 팬, 후원, 팬 활동, 팬심, 아이돌" />
      <meta name="author" content="Team StarSync" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="StarSync - 마이페이지" />
      <meta
        property="og:description"
        content="별처럼 연결되는 우리, 모든 별이 하나로 이어지는 순간"
      />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:url" content="https://www.starsync.wiki/mypage" />
      <meta property="og:site_name" content="StarSync" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="StarSync - 마이페이지" />
      <meta
        name="twitter:description"
        content="별처럼 연결되는 우리, 모든 별이 하나로 이어지는 순간"
      />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

      <div css={S.myPageWrapper}>
        <div css={S.contentBox}>
          <h2 css={[S.title, S.myIdolTitle]}>내가 관심있는 아이돌</h2>
          <section css={[S.horizonList, S.scrollStyle]}>
            {myIdol.map((idol) => {
              return (
                <div key={idol.id}>
                  <AvatarButton
                    imgUrl={idol.profilePicture}
                    removeIdol={() => removeMyIdol(idol.id)}
                  />
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
                disabled={currentPage === 1}
              />
            ) : null}

            <section
              css={[screenSize === 'mobile' ? [S.mobileAllIdols, S.scrollStyle] : null, S.idolList]}
            >
              {currentIdols.map((idol) => {
                return (
                  <div key={idol.id} css={[S.allProfileSize]}>
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
                disabled={currentPage === maxPage}
              />
            ) : null}
          </div>
          <div css={S.customButtonWrapper}>
            <CustomButton
              type="button"
              isRound={true}
              style={S.customButtonStyle}
              onButtonClick={() => {
                const hasSelected = Object.values(selectedProfiles).some(
                  (isSelected) => isSelected,
                );

                if (hasSelected) {
                  addMyIdols();
                } else {
                  showAlert('관심있는 아이돌을 추가해 주세요', 'warning', 2000);
                }
              }}
            >
              <img src={addIcon} alt="addIcon" css={S.buttonIcon} />
              추가하기
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
