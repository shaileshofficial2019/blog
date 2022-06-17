import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client/react';
import { useRouter } from 'next/router';

import { SearchPageBody, SearchPageHeader } from './components';
import { queries } from './queries';

const SearchPage = ({
  activeTab,
  posts,
  snippets,
  categories,
  tags,
  loading,
  error
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [queriedPosts, setQueriedPosts] = useState([]);
  const [queriedSnippets, setQueriedSnippets] = useState([]);
  const [queriedCategories, setQueriedCategories] = useState([]);
  const [queriedTags, setQueriedTags] = useState([]);
  const [variableLoading, setVariableLoading] = useState(false);
  const [variableError, setVariableError] = useState(null);

  const router = useRouter();
  const { query } = router;

  const [getData, { data, loading: queryLoading, error: queryError }] =
    useLazyQuery(
      activeTab === 0
        ? query.c
          ? queries.GET_ARTICLES_MATCHING_CATEGORY
          : query.t
          ? queries.GET_ARTICLES_MATCHING_TAG
          : queries.GET_ARTICLES
        : activeTab === 1
        ? queries.GET_SNIPPETS
        : queries.GET_CATEGORIES,
      {
        variables: {
          searchQuery: searchQuery
        }
      }
    );

  useEffect(() => {
    if (activeTab === 0) {
      setQueriedPosts(data?.posts || posts);
    } else if (activeTab === 1) {
      setQueriedSnippets(data?.snippets || snippets);
    } else if (activeTab === 2) {
      setQueriedCategories(data?.categories || categories);
    } else {
      setQueriedTags(
        (searchQuery && tags.filter((tag) => searchQuery === tag.name)) || tags
      );
    }
    setVariableLoading(queryLoading || loading);
    setVariableError(queryError || error);
  }, [data, searchQuery]);

  useEffect(() => {
    if (query.c) {
      setSearchQuery(query.c);
      getData();
    } else if (query.t) {
      setSearchQuery(query.t);
      getData();
    }
  }, [query]);

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.search.value);
    getData();
  };

  return (
    <>
      <SearchPageHeader
        activeTab={activeTab}
        posts={queriedPosts}
        snippets={queriedSnippets}
        categories={queriedCategories}
        searchHandler={searchHandler}
      />
      <SearchPageBody
        key={activeTab}
        activeTab={activeTab}
        posts={queriedPosts}
        snippets={queriedSnippets}
        categories={queriedCategories}
        tags={queriedTags}
        loading={variableLoading}
        error={variableError}
      />
    </>
  );
};

export default SearchPage;
