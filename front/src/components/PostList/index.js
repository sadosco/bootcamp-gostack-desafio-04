import React, { Component } from 'react';

import Post from '../Post';

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          id: 1,
          author: {
            name: 'Julio Alcantara',
            avatar:
              'https://avatars2.githubusercontent.com/u/57118747?s=400&u=28de67cdd53e582a864075e9ac47a17ad3984001&v=4',
          },
          date: '04 Jun 2019',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          comments: [
            {
              id: 1,
              author: {
                name: 'Diego Fernandes',
                avatar:
                  'https://avatars1.githubusercontent.com/u/2254731?s=400&u=dc1a4fd280cdc3c6977bacf57cbfeb8ba0917f27&v=4',
              },
              content:
                'Integer interdum tincidunt mi, imperdiet efficitur nisi imperdiet nec. Sed molestie id nunc sit amet malesuada. Donec in erat lacus. In sit amet rutrum lectus',
            },
            {
              id: 2,
              author: {
                name: 'Diego Fernandes',
                avatar:
                  'https://avatars1.githubusercontent.com/u/2254731?s=400&u=dc1a4fd280cdc3c6977bacf57cbfeb8ba0917f27&v=4',
              },
              content:
                'Et vehicula urna. Nulla at iaculis mauris. Vestibulum bibendum volutpat justo condimentum accumsan.',
            },
          ],
        },
        {
          id: 2,
          author: {
            name: 'Julio Alcantara',
            avatar:
              'https://avatars2.githubusercontent.com/u/57118747?s=400&u=28de67cdd53e582a864075e9ac47a17ad3984001&v=4',
          },
          date: '04 Jun 2019',
          content:
            'Duis ac imperdiet odio, eget gravida metus. Nunc eget justo sit amet est posuere viverra.',
          comments: [
            {
              id: 2,
              author: {
                name: 'Diego Fernandes',
                avatar:
                  'https://avatars1.githubusercontent.com/u/2254731?s=400&u=dc1a4fd280cdc3c6977bacf57cbfeb8ba0917f27&v=4',
              },
              content:
                'Aenean condimentum ac tortor non posuere. Maecenas elit tortor, ultricies a rutrum nec, tempus a sapien. In id nisi varius, condimentum velit eu, lacinia ipsum. Quisque quis mollis tellus. Mauris nec sapien odio. Aenean quis elit ultrices, sollicitudin neque ut, molestie ante. Etiam nunc magna, vestibulum nec rhoncus ac, luctus quis justo. Curabitur ac erat erat. Nunc dignissim sodales quam, ut vehicula orci pharetra sit amet.',
            },
          ],
        },
        {
          id: 3,
          author: {
            name: 'Julio Alcantara',
            avatar:
              'https://avatars2.githubusercontent.com/u/57118747?s=400&u=28de67cdd53e582a864075e9ac47a17ad3984001&v=4',
          },
          date: '04 Jun 2019',
          content:
            'Vestibulum id lectus eu mi finibus blandit. Praesent finibus hendrerit risus at pulvinar. In gravida lacus non posuere molestie. Curabitur dignissim urna neque, sit amet dapibus nulla lacinia ac. Mauris placerat auctor rhoncus. Donec scelerisque facilisis nulla, et rutrum neque blandit id.',
          comments: [
            {
              id: 3,
              author: {
                name: 'Diego Fernandes',
                avatar:
                  'https://avatars1.githubusercontent.com/u/2254731?s=400&u=dc1a4fd280cdc3c6977bacf57cbfeb8ba0917f27&v=4',
              },
              content:
                'Duis auctor et tortor et dapibus. Proin cursus mi eu diam aliquam, dictum sollicitudin dui dignissim. Aenean non vulputate lacus, quis aliquet massa.',
            },
          ],
        },
      ],
    };
  }

  render() {
    const { posts } = this.state;

    return (
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    );
  }
}
