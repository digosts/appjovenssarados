import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container, Title, List, Text } from './styles';

export default function Home() {
  const [users, setUsers] = useState([]);

  const isFocused = useIsFocused();

  /* async function loadUsers() {
    const response = await api.get('users');

    setUsers(response.data);
  } */

  useEffect(() => {
    if (isFocused) {
      // loadUsers();
      setUsers([
        {
          id: 1,
          name: 'Rodrigo',
        },
        {
          id: 2,
          name: 'Bruna',
        },
      ]);
    }
  }, [isFocused]);

  return (
    <Background>
      <Container>
        <Title>Usuários</Title>

        <List
          data={users}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </Container>
    </Background>
  );
}
