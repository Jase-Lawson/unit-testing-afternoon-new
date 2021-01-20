import { shortenText } from '../utils/functions';
import { wordCount, attachUserName } from '../../server/utils';
import { shortText, longText, posts, users } from './__data__/testData';

test('shortenText should not alter a string under 100 characters', () => {
  expect(shortenText(shortText)).toHaveLength(29)
})

test('shortenText should alter strings over 100 characters and add three periods at the end.', () => {
  const shortened = shortenText(longText);
  expect(shortened).not.toHaveLength(longText.length);
  expect(shortened.slice(-3)).toBe('...')
})

test('wordCount should correctly count the number of words', () => {
  expect(wordCount(posts)).toBe(233)
})

test('attachUserName should correct attach a users name to post ', () => {
  const newPosts = attachUserName(users, posts);
  expect(newPosts[0]).toHaveProperty('displayName')
})

test('attachUserName should remove posts with no matching name', () => {
  const newPosts = attachUserName(users, posts);
  const deletedPost = posts[5];
  expect(newPosts).not.toContainEqual(deletedPost);
})

