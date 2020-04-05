/**
 * Author: Rahul Shetty
 * Date: 12/06/2018
 *
 * Selectors for Welcome
 * @flow
 */
import { createSelector } from 'reselect';

// Selectors
const friends = (state) => state.user.details.friends;

// Base selector to get the activeIndex from friends
const getActiveIndex = createSelector(friends, (_) => _.activeIndex);

// Base selector to get the data from friends
const getData = createSelector(friends, (_) => _.data);

// Compose base selectors to get activeFriend
export const getActiveFriend = createSelector(
  [getData, getActiveIndex],
  (data, activeIndex) => data[activeIndex],
);
