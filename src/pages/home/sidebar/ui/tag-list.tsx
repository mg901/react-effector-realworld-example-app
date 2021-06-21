/* eslint-disable react/destructuring-assignment */
import { Link, useRouteMatch } from 'react-router-dom';
import { useList } from 'effector-react';
import { TagList as List } from 'shared/ui';
import { URLS } from 'router';
import { $tags } from '../model';

export const TagList: React.FC = () => {
  const { url } = useRouteMatch<{ url: string }>();

  return (
    <List>
      {useList($tags, {
        getKey: (tag) => tag,
        fn: (tag) => (
          <Link
            className="tag-default tag-pill"
            to={`${url}${URLS.FEED_BY_TAG}?tag=${tag}`}>
            {tag.toLowerCase()}
          </Link>
        ),
      })}
    </List>
  );
};
