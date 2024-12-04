import Head from 'next/head';

const SEO = ({ title, description }) => (
  <Head>
    <title>{title || 'Your Site Title'}</title>
    <meta name="description" content={description || 'Your Site Description'} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  </Head>
);

export default SEO;