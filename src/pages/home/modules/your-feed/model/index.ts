import { createEffect, forward, attach } from 'effector-root';
import { status } from 'patronum/status';
import { request } from 'api';
import { limit } from 'library/limit';
import * as feed from 'modules/feed';
import * as types from './types';

export const fetchFeedFx = createEffect<types.fetchFeedFxArgs, feed.types.Feed>(
  ({ pageSize, page }) =>
    request
      .get(`articles/feed?${limit(pageSize, page)}`)
      .then(({ data }) => data),
);

export const {
  Gate,
  currentPageWasSet,
  favoriteToggled,
  $currentPage,
  $feed,
  $articles,
  $pageSize,
  useModel,
} = feed.createFeedModel({
  status: status({ effect: fetchFeedFx }),
});

$feed.on(fetchFeedFx.doneData, (_, payload) => payload);

forward({
  from: [Gate.open, currentPageWasSet],
  to: attach({
    source: {
      pageSize: $pageSize,
      page: $currentPage,
    },
    effect: fetchFeedFx,
  }),
});
