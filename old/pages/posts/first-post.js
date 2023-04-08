import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/cutter_layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post111</h1>
    </Layout>
  );
}