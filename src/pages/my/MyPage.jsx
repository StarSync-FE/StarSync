import Avatar from '@/components/avatar';
import { css } from '@emotion/react';

const MyPage = () => {
  return (
    <div>
      <section>
        <h2>내가 관심있는 아이돌</h2>
        <div>
          <Avatar />
        </div>
      </section>
    </div>
  );
};

export default MyPage;
