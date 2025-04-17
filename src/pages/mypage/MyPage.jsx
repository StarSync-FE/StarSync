import { useLoaderData } from 'react-router-dom';

export default function MyPage() {
  const idols = useLoaderData(); // 여기서 idol 리스트를 받음

  return (
    <ul>
      {idols.map((idol) => (
        <li key={idol.id}>{idol.name}</li>
      ))}
    </ul>
  );
}
