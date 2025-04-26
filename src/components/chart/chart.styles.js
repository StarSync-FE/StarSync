import media from '@/styles/responsive';
import { css } from '@emotion/react';

export const chartSectionHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;

  div {
    ${media({
      fontSize: ['1.5rem', '1.5rem', '1.8rem', '2rem'],
      marginBottom: ['1.5rem', '1.5rem', '0', '0'],
    })}
    font-weight: 700;
  }
`;

export const customButton = css`
    ${media({
      fontSize: ['1.5rem', '1.5rem', '1.8rem', '2rem'],
      width: ['9rem', '9rem', '9rem', '9rem'],
    })}
    height: 2rem;
    border: none;
    border-radius: 0.3rem;
    font-size: 0.8rem;
    font-weight: 900;
    background-color: var(--orange);

    &:hover {
      background-color: var(--pink);
    }

    div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    img {
    width: 1.4rem;
    height: 1.4rem;
    }

    span {
      font-size: 1rem;
      font-weight: 900;
    }
  }
`;

export const tabButtonWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media({
    marginTop: ['1rem', '2rem', '3rem', '4rem'],
  })}
`;

export const idolListButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  border: none;
  border-radius: 3.2px;
  text-align: center;
  color: var(--white);
  background-color: var(--black-deep);
  ${media({
    fontSize: ['1.2rem', '1.3rem', '1.5rem', '1.7rem'],
    height: ['3rem', '4rem', '4.5rem', '5rem'],
  })}
`;

export const activeButton = css`
  background-color: var(--black);
  border-bottom: 1px solid var(--white);
`;

export const idolList = css`
  display: grid;
  margin-top: 1rem;
  ${media({
    fontSize: ['1.1rem', '1.3rem', '1.5rem', '1.7rem'],
    gap: ['0.5rem', '0.7rem', '1.2rem', '1.7rem'],
    gridTemplateColumns: ['1fr', '1fr', '1fr 1fr', '1fr 1fr'],
  })}

  li {
    display: flex;
    justify-content: space-between;
    ${media({
      padding: ['0.3rem 0 0.7rem', '0.5rem 0 0.7rem', '0.8rem 0 1.7rem', '1rem 0 2rem'],
    })}
    text-align: center;
    border-bottom: 1px solid var(--black);
    list-style: none;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    img {
      width: 4rem;
      height: 4rem;
      margin-right: .5rem;
      border: 2px solid var(--black);
      border-radius: 50%;
      box-shadow: 0 0 2px 1.6px var(--orange);
      box-shadow: 0 0 0 0.1rem var(--orange);
      object-fit: cover;
    }
  }
`;

export const rankStyle = css`
  color: var(--orange);
`;

export const moreButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 2.5rem;
  margin: 2rem auto;
  border: 1px solid var(--white);
  border-radius: 3.2px;
  font-size: 1.2rem;
  color: var(--white-full);
  background-color: var(--black);

  &:hover {
    background-color: var(--black-full);
  }

  &:disabled {
    cursor:not-allowed;
    opacity: 0.6;
  }
`;

export const spinner = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;

  img {
    width: 15rem;
    height: 15rem;
    object-fit: contain;
  }
`;
