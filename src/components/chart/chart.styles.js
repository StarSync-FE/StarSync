import { css } from '@emotion/react';

export const chartSection = css`
  margin-top: 2.5rem;

  p {
    font-size: 0.9rem;
    color: #6b7280;
  }
`;

export const chartSectionHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    font-size: 1.5rem;
    font-weight: 700;
  }

  button {
    width: 8rem;
    height: 2rem;
    border: none;
    border-radius: 0.3rem;
    font-size: 0.8rem;
    font-weight: 900;
    color: white;
    background-color: #F96D69;
    cursor: pointer;
    &:hover {
      background-color: #FE5493;
    }

    div {
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;

    img {
    width: 1rem;
    height: 1rem;
    }

    span {
      font-weight: 900;
    }
  }
}
`;

export const tabButtonWrapper = css`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    padding: 1.5rem 15rem;
  }
`;

export const idolListButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4rem;
    margin: 0 auto;
    background-color: black;
    color: white;
    border: none;
    border-radius: 0.2rem;
    padding: 1rem 0;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
`;

export const activeButton = css`
  background-color: #181D26;
  border-bottom: 1px solid white;
`;

export const idolList = css`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;

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
      border: 2px solid white;
      box-shadow: 0 0 0 0.1rem #F96D69;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

export const moreButton = css`
  font-size: 1.2rem;
  display: flex;
  margin: 2rem auto;
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
