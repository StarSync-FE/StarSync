import { css } from '@emotion/react';

export const modalContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 32.7rem;
  height: 49.4rem;
  padding-top: 2.4rem;

  h2 {
    align-self: flex-start;
    padding-left: 1.6rem;
    font-size: 1.8rem;
    font-weight: 600;
  }

  figure > img {
    width: 15.8rem;
    height: 20.6rem;
    border-radius: 8px;
    object-fit: cover;
    object-position: center;
  }
`;

export const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  img {
    align-self: center;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 15.4rem;
  }
`;

export const titleContent = css`
  p {
    font-size: 1.2rem;
    color: var(--gray);
  }

  h3 {
    /* 디자인을 위해 필요할까? */
    overflow: hidden;
    font-size: 1.4rem;
    font-weight: 500;
    white-space: nowrap;
    color: var(--white-full);
    text-overflow: ellipsis;
}
`;

export const inputContent = css`
  position: relative;
  width: 29.5rem;
  height: 5.8rem;

  input {
    width: 100%;
    height: 100%;
    padding: 1.6rem;
    border: 1px solid var(--white-full);
    border-radius: 8px;
    font-size: 2rem;
    font-weight: 700;
    background-color: #272f3d;
  }

  input::placeholder {
    font-size: 2rem;
    font-weight: 700;
    text-align: left;
  }

  img {
    position: absolute;
    top: 50%;
    right: 5%;
    width: 3.6rem;
    height: 3.6rem;
    transform: translateY(-50%);
  }
`;
