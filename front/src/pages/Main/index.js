import React from 'react';

import { MdAccountCircle } from 'react-icons/md';
import { Header } from './styles';

import PostList from '../../components/PostList';

export default function Main() {
  return (
    <>
      <Header>
        <nav>
          <img src="https://i.imgur.com/KDIDiSE.png" alt="facebook-logo" />
          <div>
            <span>Meu perfil</span>
            <MdAccountCircle color="#FFF" size={24} />
          </div>
        </nav>
      </Header>

      <PostList />
    </>
  );
}
