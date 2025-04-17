import { useLoaderData } from 'react-router-dom';

export default function MyPage() {
  const idols = useLoaderData(); // 여기서 데이터 받음
  console.log(idols);

  return <ul>아이돌</ul>;
}
