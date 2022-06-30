import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'cobmin';
export const siteTitle = 'cobmin';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="cobmin's blog: content that hopefully helps."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer>
      <p>Contact Me:</p>
      <Link href="https://discord.gg/gKxvUjRpvw">
       <a>            
         <Image
           priority
            src="/images/discordLogo.jpg"
            className={utilStyles.borderCircle}
            height={50}
            width={50}
           alt={name}
          />
       </a>  
      </Link>
      <Link href="https://github.com/cobmin">
       <a>            
         <Image
           priority
            src="/images/githubLogo.jpg"
            className={utilStyles.borderCircle}
            height={50}
            width={50}
           alt={name}
          />
       </a>  
      </Link>
      <Link href="https://twitch.com/cobmin">
       <a>            
         <Image
           priority
            src="/images/twitchLogo.jpg"
            className={utilStyles.borderCircle}
            height={50}
            width={50}
           alt={name}
          />
       </a>  
      </Link>
      <Link href="https://twitter.com/cobmin">
       <a>            
         <Image
           priority
            src="/images/twitterLogo.jpg"
            className={utilStyles.borderCircle}
            height={50}
            width={50}
           alt={name}
          />
       </a>  
      </Link>
      </footer>
    </div>
  );
}