import NextLink from 'next/link';
import { ReactElement } from 'react';

async function getYear() {
  return new Date().getFullYear();
}

const LinkWrapper = ({ children }: { children: ReactElement }) => {
  return <ul className="flex flex-col gap-2 md:flex-row md:gap-6">{children}</ul>;
};

const Link = ({ href, label }: { href: string; label: string }) => {
  return (
    <li>
      <NextLink className="text-black hover:underline dark:text-white md:text-lg" href={href}>
        {label}
      </NextLink>
    </li>
  );
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const year = await getYear();

  return (
    <>
      <div className="min-h-[calc(100vh-165px-240px)] md:min-h-[calc(100vh-165px-120px)]">{children}</div>
      <footer className="mx-5 sm:mx-8">
        <div className="mx-auto flex max-w-page justify-between border-t border-lighter-grey px-2 pt-8 sm:p-8 sm:pt-12">
          <div className="flex flex-col gap-14 md:gap-7">
            <LinkWrapper>
              <>
                <Link href="/" label="Home" />
                <Link href="/contents/me" label="About" />
                <Link href="/contents/blog" label="Blog" />
                <Link href="/contents/contact" label="Contact" />
              </>
            </LinkWrapper>
            <LinkWrapper>
              <>
                <a
                  className="block text-black hover:underline dark:text-white md:text-lg"
                  href="https://github.com/kei0528"
                >
                  Github
                </a>
                <a
                  className="block text-black hover:underline dark:text-white md:text-lg"
                  href="https://www.linkedin.com/in/keisuke-tanaka-5546a2198/"
                >
                  Linkedin
                </a>
              </>
            </LinkWrapper>
          </div>
          <small className="h-fit text-sm writing-mode-vertical md:text-base md:writing-mode-horizontal">
            &copy;Keisuke Tanaka {year}
          </small>
        </div>
      </footer>
    </>
  );
}
