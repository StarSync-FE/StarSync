import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Link, useLoaderData } from 'react-router-dom';
import { CustomButton } from '@/components/button';
import logoImage from '@/assets/images/starSync-logo.svg';
import idolImage1 from '@/assets/images/idols/taesan2.png';
import idolImage2 from '@/assets/images/idols/minji.png';
import idolImage3 from '@/assets/images/idols/keiju.png';
import idolImage4 from '@/assets/images/idols/wonyoung.png';
import * as S from './landingPage.styles';
import { StarFrame } from '@/components/starFrame';

const stars = [
  { id: 1, top: '10%', left: '15%', width: 30, height: 30 },
  { id: 2, top: '70%', left: '80%', width: 40, height: 40 },
  { id: 3, top: '50%', left: '10%', width: 20, height: 20 },
  { id: 4, top: '20%', left: '30%', width: 50, height: 50 },
  { id: 5, top: '10%', left: '80%', width: 30, height: 30 },
  { id: 6, top: '80%', left: '20%', width: 30, height: 30 },
  { id: 7, top: '85%', left: '85%', width: 25, height: 25 },
  { id: 8, top: '5%', left: '50%', width: 35, height: 35 },
  { id: 9, top: '60%', left: '60%', width: 20, height: 20 },
  { id: 10, top: '40%', left: '70%', width: 30, height: 30 },
  { id: 11, top: '25%', left: '5%', width: 20, height: 20 },
  { id: 12, top: '90%', left: '45%', width: 30, height: 30 },
  { id: 13, top: '50%', left: '90%', width: 30, height: 30 },
];

const sections = [
  {
    id: 'main',
    title: 'StarSync',
    description: '별처럼 연결되는 우리, 모든 별이 하나로 이어지는 순간',
    buttonText: '지금 시작하기',
    showScrollGuide: true,
    idolImage: idolImage1,
  },
  {
    id: 'voting',
    title: '투명한 투표 시스템',
    description: '투명하고 신뢰할 수 있는 투표 시스템으로\n여러분의 소중한 한 표를 행사하세요.',
    buttonText: '투표하러 가기',
    showScrollGuide: true,
    idolImage: idolImage2,
  },
  {
    id: 'funding',
    title: '팬덤의 힘을 보여주세요',
    description: '여러분이 좋아하는 아이돌의 활동을\n직접 후원하고 특별한 혜택도 받아가세요.',
    buttonText: '후원하러 가기',
    showScrollGuide: true,
    idolImage: idolImage3,
  },
  {
    id: 'my-idol',
    title: '나만의 아이돌을 위한 특별한 공간',
    description:
      '여러 아이돌 중에서 오직 당신의 최애를를 선택하고\n팬심을 가장 나다운 방식으로 표현해보세요.',
    buttonText: '내 최애 선택하기',
    idolImage: idolImage4,
  },
];

const LandingPage = () => {
  const sectionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const { list } = useLoaderData();
  console.log('리스트:', list);

  const handleClearStorage = () => {
    localStorage.clear();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        }
      },
      { threshold: 0.5 },
    );

    for (const ref of sectionRefs.current) {
      if (ref) observer.observe(ref);
    }

    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (index) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleScrollGuideClick = () => {
    const nextIndex = Math.min(activeIndex + 1, sections.length - 1);
    handleSmoothScroll(nextIndex);
  };

  return (
    <div css={S.pageContainer}>
      <div css={S.backgroundStarsWrapper}>
        {stars.map((star) => (
          <div key={star.id} css={S.starStyle(star)} />
        ))}
      </div>

      {/* Dot Navigation */}
      <nav css={S.navDots}>
        {sections.map((section, idx) => (
          <button
            key={section.id}
            type="button"
            css={[S.dot, activeIndex === idx && S.activeDot]}
            onClick={() => handleSmoothScroll(idx)}
            aria-label={`Move to ${section.id} section`}
          />
        ))}
      </nav>

      {/* Sections */}
      {sections.map((section, idx) => (
        <section
          key={section.id}
          data-index={idx}
          ref={(el) => {
            sectionRefs.current[idx] = el;
          }}
          css={S.section}
        >
          <motion.div
            css={S.sectionContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: activeIndex === idx ? 1 : 0.3, y: activeIndex === idx ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <p>{section.description}</p>
            <img src={logoImage} css={S.logo} alt="StarSyncLogo" />
            {idx === 0 ? (
              <StarFrame
                imageUrls={[idolImage1, idolImage2, idolImage3, idolImage4]}
                interval={700}
              />
            ) : (
              <StarFrame imageUrls={[section.idolImage]} />
            )}

            {idx === sections.length - 1 ? (
              <div css={S.buttonWrapper}>
                <Link to="/list" onClick={handleClearStorage}>
                  <CustomButton type="button" variant="landing">
                    {section.buttonText}
                  </CustomButton>
                </Link>
              </div>
            ) : null}
            {section.showScrollGuide && (
              <button
                type="button"
                css={S.scrollGuide}
                onClick={handleScrollGuideClick}
                aria-label="Scroll to next section"
              >
                스크롤하여 아래로 이동
              </button>
            )}
          </motion.div>
        </section>
      ))}
    </div>
  );
};

export default LandingPage;
