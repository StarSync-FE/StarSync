import { css } from '@emotion/react';
import media from '@/styles/responsive';
import { voteButtonFlow, rotateWithPause, heartbeat } from '@/styles/animation';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const chartWrapper = css`
  margin-bottom: 10rem;
`;

export const chartSectionHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    font-weight: 700;
    ${media({
      fontSize: ['1.5rem', '1.5rem', '1.8rem', '2rem'],
    })}
  }
`;

export const voteButton = css`
  ${flexCenter};
  gap: 0.4rem;
  background: linear-gradient(45deg, var(--pink) 0%, var(--orange-pink) 51%, var(--pink) 100%);
  background-position: left center; /* 기본 시작 위치 */
  background-size: 400%; /* 배경 크기 확장 */
  transition: all 0.1s ease;

  img {
    width: 2rem;
    height: 2.3rem;
    margin-bottom: 0.2rem;
  }

  span {
    font-size: 1.4rem;
    font-weight: 700;
  }

  &:hover {
    background-position: right center; /* hover 시 배경 이동 */
    animation: ${heartbeat} 0.7s ease-in-out; /* 애니메이션 흐름 */
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const tabButtonWrapper = css`
  ${flexCenter};
  ${media({
    marginTop: ['1rem', '2rem', '3rem', '4rem'],
  })}
`;

export const idolListButton = css`
  ${flexCenter};
  width: 100%;
  margin: 0 auto;
  border: none;
  border-radius: 3.2px;
  border-bottom: 1px solid var(--white-alpha-20);
  text-align: center;
  color: var(--white);
  background: linear-gradient(45deg, var(--black-full) 0%, var(--white-alpha-20) 51%, var(--black-full) 100%);
  background-position: right center; /* 기본 시작 위치 */
  background-size: 400%; /* 배경 크기 확장 */
  transition: background-color 0.7s ease, color 2s ease; /* 추가: 부드럽게 변환 */

  ${media({
    fontSize: ['1.2rem', '1.3rem', '1.5rem', '1.7rem'],
    height: ['3rem', '4rem', '4.5rem', '5rem'],
  })}

  &:hover {
    background-position: right center; /* hover 시 배경 이동 */
    animation: ${voteButtonFlow} 4s ease infinite; /* 애니메이션 흐름 */
    opacity: 0.9;
  }
`;

export const activeButton = css`
  border-bottom: 1px solid var(--white);
  background: linear-gradient(45deg, var(--black) 0%, var(--white-alpha-20) 51%, var(--white-alpha-10) 100%);
  background-position: left center; /* 기본 시작 위치 */
  background-size: 400%; /* 배경 크기 확장 */
  transition: all 0.1s ease;

  &:hover {
    background-position: right center; /* hover 시 배경 이동 */
    animation: ${voteButtonFlow} 4s ease infinite; /* 애니메이션 흐름 */
    opacity: 0.9;
  }
`;

export const idolList = css`
  display: grid;
  color: var(--gray-light);
  ${media({
    marginTop: ['1rem', '1.2rem', '1.7rem', '1.7rem'],
    fontSize: ['1.1rem', '1.2rem', '1.4rem', '1.6rem'],
    gap: ['0.5rem', '0.7rem', '1.2rem', '1.7rem'],
    gridTemplateColumns: ['1fr', '1fr', '1fr 1fr', '1fr 1fr'],
  })}
`;

export const idolData = css`
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-bottom: 1px solid var(--black);
  list-style: none;
  ${media({
    paddingBottom: ['0.7rem', '0.7rem', '1.5rem', '1.7rem'],
  })}

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  &:hover img, &:hover span {
    animation: ${heartbeat} 0.7s ease-in-out;
  }

  &:active {
    transform: scale(1.015);
  }
`;

export const firstStyle = css`
  position: relative;
`;

export const starIcon = css`
  position: absolute;
  bottom: 3.7rem;
  left: 1.1rem;
  z-index: 1;
  width: 4rem;
  animation: ${rotateWithPause} 3s linear infinite; /* 7초 애니메이션을 무한 반복 */
  transform-style: preserve-3d;

  ${media({
    width: ['1.8rem', '1.8rem', '2.2rem', '2.2rem', '2rem'],
    bottom: ['2.7rem', '2.7rem', '3.5rem', '3.5rem', '3.5rem'],
    left: ['3rem', '3rem', '4rem', '4rem', '4rem'],
  })}
`;

export const profileStyle = css`
  border: 2px solid var(--black-deep);
  border-radius: 50%;
  box-shadow: 0 0 0 0.1rem var(--orange);
  object-fit: cover;

  ${media({
    width: ['4rem', '4rem', '5rem', '5rem'],
    height: ['4rem', '4rem', '5rem', '5rem'],
    marginInline: ['0.1rem', '0.2rem', '0.5rem', '0.5rem'],
  })}
`;

export const rankStyle = css`
  margin-inline: 0.5rem 0.9rem;
  color: var(--orange);
`;

export const idolContent = css`
  display: flex;
  flex-direction: column;
  ${media({
    gap: ['0.6rem', '0.5rem', '0.8rem', '1rem'],
  })}
`;

export const groupStyle = css`
  ${media({
    fontSize: ['0.9rem', '1rem', '1.2rem', '1.35rem'],
  })}
`;

export const nameContent = css`
  display: flex;
`;

export const nameStyle = css`
  font-weight: 700;
  color: var(--white-full);
`;

export const starNameIcon = css`
  width: 1.5rem;
  margin-bottom: 0.1rem;
  margin-left: 0.2rem;
`;

export const voteStyle = css`
  color: var(--white);
`;
