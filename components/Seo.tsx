import Head from 'next/head';
import { useRouter } from 'next/router';

// Default meta
const defaultMeta = {
  title: 'NEXT.js + TypeScript + Material UI',
  siteName: 'Plitz One by Plitz Corporation',
  description:
    'Plitz One is a boilerplate created by Plitz Corporation to helpout speed up your development process. The same boilerplate is used in our own templates',
  /** Without additional '/' on the end, e.g. https://plitzinc.com */
  url: 'https://plitzinc.com',
  type: 'website',
  robots: 'follow, index',
  /**
   * No need to be filled, will be populated with openGraph function
   * If you wish to use a normal image, just specify the path below
   */
  image: 'https://plitzinc.com/images/large-og.png',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : `${meta.title} | ${meta.siteName}`;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      {/* <meta name='twitter:site' content='@th_clarence' /> */}
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta
            name='author'
            property='article:author'
            content='Norman Pleitez'
          />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='apple-mobile-web-app-title' content='Plitz One by Plitz7' />
      <meta name='application-name' content='Plitz One by Plitz7' />
      <meta name='msapplication-TileColor' content='#0b093a' />
      <meta name='msapplication-TileColor' content='#0b093a' />
      <meta name='msapplication-config' content='/icons/browserconfig.xml' />
      <meta name='theme-color' content='#0b093a' />
    </Head>
  );
}

// ! then replace the whole /public/icons folder and favicon.ico
const favicons: Array<React.ComponentPropsWithoutRef<'link'>> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/icons/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/icons/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/icons/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/icons/site.webmanifest' },
  {
    rel: 'mask-icon',
    href: '/icons/safari-pinned-tab.svg',
    color: '#0b093a',
  },
  { rel: 'shortcut icon', href: '/icons/favicon.ico' },
];
