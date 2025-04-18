import React from 'react';
import { useNavigation } from 'react-router-dom';

const PendingUI = ({ children }) => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return isLoading ? (
    <div>
      <p>로딩중...</p>
    </div>
  ) : (
    children
  );
};

export default PendingUI;
