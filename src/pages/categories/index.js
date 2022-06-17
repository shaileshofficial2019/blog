import Script from 'next/script';

import { Analytics, client, SEO } from '../../common/util';
import Navbar from '../../common/components/navbar/Navbar';
import Footer from '../../common/components/footer/Footer';
import CopyrightNotice from '../../common/components/footer/CopyrightNotice';
import SearchPage from '../../components/search/SearchPage';
import { gql } from '@apollo/client';
import { Newsletter } from '../../common/components/misc';

const Categories = ({ categories, loading, error }) => {
  return (
    <>
      <SEO
        title={'Categories'}
        description={'Explore articles'}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/categories`}
      />
      <Analytics />

      <Navbar />

      <main>
        <SearchPage
          activeTab={2}
          categories={categories}
          loading={loading}
          error={error}
        />
        <Newsletter />
      </main>

      <Footer />
      <CopyrightNotice />
    </>
  );
};

export async function getStaticProps() {
  const { data, loading, error } = await client.query({
    query: gql`
      query CategoriesPage {
        categories {
          id
          name
          slug
        }
      }
    `
  });

  return {
    props: {
      categories: data?.categories,
      loading,
      error: error ? error.message : null
    }
  };
}

export default Categories;
