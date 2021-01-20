import React from 'react';
import { render } from '@testing-library/react';
import PostWidget from '../components/PostWidget';
import { MemoryRouter } from 'react-router-dom';
import { shortenText } from '../utils/functions';
import { posts } from './__data__/testData';

const longPost = posts[0],
  post = posts[1];

test('Renders a post', () => {
  const { container } = render(
    <MemoryRouter>
      <PostWidget {...post} />
    </MemoryRouter>
  )
  expect(container.textContent).toContain(post.text)
})

test('Shortens displayed text when not expanded', () => {
  const { container } = render(
    <MemoryRouter>
      <PostWidget {...longPost} />
    </MemoryRouter>
  )
  expect(container.textContent).toContain(shortenText(longPost.text))
})

test('Display all text when expanded', () => {
  const { container } = render(
    <MemoryRouter>
      <PostWidget expanded={true} {...longPost} />
    </MemoryRouter>
  )
  expect(container.textContent).toContain(longPost.text)
})

