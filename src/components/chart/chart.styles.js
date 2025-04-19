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
  justify-content: space-between;
  align-items: center;

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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.75rem;

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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

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
    padding: 1rem 0;
    border: none;
    border-radius: 0.2rem;
    font-size: 1rem;
    text-align: center;
    white-space: nowrap;
    color: white;
    background-color: black;
    cursor: pointer;
`;

export const activeButton = css`
  background-color: #181D26;
  border-bottom: 1px solid white;
`;

export const idolList = css`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: 1fr 1fr;
  margin-top: 1rem;
  padding-bottom: 0.5rem;

  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    padding-bottom: 1rem;
    text-align: center;
    border-bottom: 1px solid #181D26;
    list-style: none;

    span {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    img {
      width: 4rem;
      height: 4rem;
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 0 0 0.1rem #F96D69;
      object-fit: cover;
    }
  }
`;

export const moreButton = css`
  display: flex;
  margin: 2rem auto;
  padding: 0.5rem 5rem;
  border: 1px solid white;
  border-radius: 0.2rem;
  font-size: 1.2rem;
  color: white;
  background-color: black;
  cursor: pointer;

  &:hover {
    background-color: #181D26;
  }
`;
