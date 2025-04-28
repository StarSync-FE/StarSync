import githubIcon from '@/assets/icons/github-icon.svg';
import * as S from './footer.styles';

const Footer = () => {
  return (
    <footer css={S.footerWrapper}>
      <div css={S.contentSection}>
        <div css={S.leftSection}>
          <p>© StarSync </p>
          <p>Contact: harryseop@gmail.com</p>
        </div>
        <div css={S.rightSection}>
          <a
            href="https://github.com/StarSync-FE/StarSync"
            target="_blank"
            rel="noopener noreferrer"
            css={S.githubLink}
          >
            <img src={githubIcon} alt="GitHub" css={S.githubIcon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
