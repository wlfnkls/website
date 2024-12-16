import { ReactComponent as GithubLogo } from '../assets/svg/github-logo.svg';

const Header = () => (
  <header>
    <div className="lgbt h-1 mb-6 sm:mb-8" />
    <div className="max-w-4xl mx-auto px-4 sm:px-8 flex items-center justify-between">
      <div className="flex flex-col">
        <div className="text-primary font-lato font-bold">Wolf Niklas</div>
        <div className="text-secondary uppercase font-lato text-sm ">
          Webdevelopment
        </div>
      </div>
      <a
        href="https://github.com/wlfnkls"
        target="_blank"
        rel="noreferrer"
      >
        <GithubLogo className="cursor-pointer" />
      </a>
    </div>
  </header>
);
export default Header;
