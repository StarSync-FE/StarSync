import { css } from '@emotion/react';

export const wrapper = css`
  padding: 20px;
  background-color: black;
  color: white;
  font-family: Pretendard, sans-serif;
`;

export const creditWrapper = css`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid white;
  border-radius: 8px;
  font-weight: 700;

  div {
    margin-left: 0.7rem;
  }

  button {
    width: 5rem;
    height: 3rem;
    border: none;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 700;
    color: #F96D69;
    background-color: black;
    cursor: pointer;

  }
`;

export const credit = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;

  img {
    margin-top: 0.2rem;
    width: 24px;
    height: 24px;
  }

  span {
    font-size: 18px;
    font-weight: 700;
    color: #F96D69;
  }
`;

export const chartSection = css`
  margin-top: 2.5rem;

  p {
    font-size: 0.9rem;
    color: #6b7280;
  }
`;

export const chartSectionHeader = css`
  display: flex;
  justify-content: space-between;

  div {
    font-weight: 900;
  }

  button {
    width: 8rem;
    height: 2rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    font-weight: 700;
    color: white;
    background-color: #F96D69;
    cursor: pointer;
    &:hover {
      background-color: #FE5493;
    }

    div {
    display: flex;
    align-items: center;
    margin-left: 0.3rem;
    gap: 0.4rem;

    img {
    width: 1rem;
    height: 1rem;
    }
  }
}
`;

export const tabButtonWrapper = css`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const idolListButton = css`
    margin-top: 1rem;
    background-color: black;
    color: white;
    border: none;
    border-radius: 0.2rem;
    padding: 1rem 10.5rem;
    cursor: pointer;

    &:hover {
      background-color: #181D26;
      border-bottom: 1px solid white;
    }
    
    div {
      width: 7.5rem;
    }
`;

export const idolList = css`
  margin-top: 1rem;

  li {
    margin-bottom: 1rem;
    border-bottom: 1px solid #181D26;
    display: flex;
    justify-content: space-between;
    list-style: none;
    text-align: center;

    span {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    img {
      width: 4rem;
      height: 4rem;
      border: 2px solid #ddd;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

export const moreButton = css`
  display: flex;
  margin: 2rem auto;
  padding-top: 1rem;
  background-color: black;
  color: white;
  border: 1px solid white;
  border-radius: 0.2rem;
  padding: 0.5rem 5rem;
  cursor: pointer;

  &:hover {
    background-color: #181D26;
  }
`;
