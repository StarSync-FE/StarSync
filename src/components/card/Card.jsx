/** @jsxImportSource @emotion/react */
import stupid from '@/assets/images/stupid.png';
import * as S from './card.styles';
const Card = () => {
  const mockData = [
    {
      id: 671,
      idolId: 599,
      title: '진짜 장원영 너무 예쁘다',
      subtitle: '코엑스 광고',
      targetDonation: 100000,
      receivedDonations: 3000,
      createdAt: '2025-01-25T07:43:18.697Z',
      deadline: '2025-02-25T23:59:59.000Z',
      status: false,
      idol: {
        id: 599,
        name: '장원영',
        gender: 'female',
        group: '아이브',
        profilePicture: stupid,
        totalVotes: 4,
      },
    },
    {
      id: 672,
      idolId: 600,
      title: '아이즈원 컴백 기다린다!',
      subtitle: '서울광장 광고',
      targetDonation: 150000,
      receivedDonations: 50000,
      createdAt: '2025-02-01T08:15:23.123Z',
      deadline: '2025-03-01T23:59:59.000Z',
      status: true,
      idol: {
        id: 600,
        name: '조유리',
        gender: 'female',
        group: '아이즈원',
        profilePicture: stupid,
        totalVotes: 20,
      },
    },
    {
      id: 673,
      idolId: 601,
      title: '리더 강미나님 사랑해요!',
      subtitle: '인천공항 광고',
      targetDonation: 200000,
      receivedDonations: 120000,
      createdAt: '2025-02-10T09:20:05.450Z',
      deadline: '2025-03-15T23:59:59.000Z',
      status: true,
      idol: {
        id: 601,
        name: '강미나',
        gender: 'female',
        group: '구구단',
        profilePicture: stupid,
        totalVotes: 15,
      },
    },
    {
      id: 674,
      idolId: 602,
      title: '서현 진짜 팬이에요',
      subtitle: '광화문 광고',
      targetDonation: 50000,
      receivedDonations: 25000,
      createdAt: '2025-01-30T06:10:18.567Z',
      deadline: '2025-02-28T23:59:59.000Z',
      status: false,
      idol: {
        id: 602,
        name: '서현',
        gender: 'female',
        group: '소녀시대',
        profilePicture: stupid,
        totalVotes: 30,
      },
    },
    {
      id: 675,
      idolId: 603,
      title: '백예린 음성으로 후원합니다',
      subtitle: '신촌 광고',
      targetDonation: 120000,
      receivedDonations: 70000,
      createdAt: '2025-02-01T10:05:33.876Z',
      deadline: '2025-03-05T23:59:59.000Z',
      status: true,
      idol: {
        id: 603,
        name: '백예린',
        gender: 'female',
        group: '개인 활동',
        profilePicture: stupid,
        totalVotes: 50,
      },
    },
    {
      id: 676,
      idolId: 604,
      title: '정은지 사랑합니다',
      subtitle: '잠실 광고',
      targetDonation: 130000,
      receivedDonations: 90000,
      createdAt: '2025-01-15T11:30:10.234Z',
      deadline: '2025-02-20T23:59:59.000Z',
      status: false,
      idol: {
        id: 604,
        name: '정은지',
        gender: 'female',
        group: '에이핑크',
        profilePicture: stupid,
        totalVotes: 10,
      },
    },
    {
      id: 677,
      idolId: 605,
      title: '지민님 너무 멋져요!',
      subtitle: '대전광역시 광고',
      targetDonation: 80000,
      receivedDonations: 50000,
      createdAt: '2025-02-12T13:20:22.123Z',
      deadline: '2025-03-10T23:59:59.000Z',
      status: true,
      idol: {
        id: 605,
        name: '지민',
        gender: 'female',
        group: '방탄소년단',
        profilePicture: stupid,
        totalVotes: 100,
      },
    },
    {
      id: 678,
      idolId: 606,
      title: '아이린 너무 멋있어요!',
      subtitle: '한강공원 광고',
      targetDonation: 95000,
      receivedDonations: 30000,
      createdAt: '2025-02-08T14:45:11.500Z',
      deadline: '2025-03-12T23:59:59.000Z',
      status: true,
      idol: {
        id: 606,
        name: '아이린',
        gender: 'female',
        group: '레드벨벳',
        profilePicture: stupid,
        totalVotes: 120,
      },
    },
    {
      id: 679,
      idolId: 607,
      title: '권은비 너무 사랑해요',
      subtitle: '서울역 광고',
      targetDonation: 40000,
      receivedDonations: 15000,
      createdAt: '2025-02-14T07:00:00.000Z',
      deadline: '2025-03-20T23:59:59.000Z',
      status: true,
      idol: {
        id: 607,
        name: '권은비',
        gender: 'female',
        group: '아이즈원',
        profilePicture: stupid,
        totalVotes: 25,
      },
    },
    {
      id: 680,
      idolId: 608,
      title: '하늘이가 최고에요!',
      subtitle: '서울시청 광고',
      targetDonation: 150000,
      receivedDonations: 100000,
      createdAt: '2025-01-18T08:00:10.333Z',
      deadline: '2025-02-18T23:59:59.000Z',
      status: false,
      idol: {
        id: 608,
        name: '하늘',
        gender: 'female',
        group: '여자친구',
        profilePicture: stupid,
        totalVotes: 35,
      },
    },
  ];

  const test = mockData[0];

  const calculateDaysLeft = (createdAt, deadline) => {
    const createdDate = new Date(createdAt);
    const deadlineDate = new Date(deadline);
    const timeDifference = deadlineDate - createdDate;
    const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24)); // 밀리초 -> 일로 변환
    return daysLeft;
  };

  const days = calculateDaysLeft(test.createdAt, test.deadline);

  return (
    <article css={S.wrapper}>
      {/* 그라디언트 오버레이 */}
      <div css={S.gradient} />

      {/* 이미지 */}
      <figure style={{ margin: 0 }}>
        <img src={stupid} alt="임시" css={S.image} />
      </figure>

      {/* 버튼 */}
      <button type="button" css={S.button}>
        후원하기
      </button>

      {/* 텍스트 및 진행 정보 */}
      <div css={S.content}>
        <div css={S.header}>
          <p css={S.subTitle}>{test.subtitle}</p>
          <h2 css={S.title}>{test.title}</h2>
        </div>

        <div css={S.info}>
          <div css={S.statusBar}>
            <div css={S.statusLeft}>
              <img src={stupid} alt="망했다" css={S.icon} />
              <p>{test.receivedDonations.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
            </div>
            <p>{days}일 남음</p>
          </div>

          {/* 진행 바 */}
          <div css={S.progressBar}>
            <div css={S.progressFill} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
