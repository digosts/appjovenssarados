import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useIsFocused } from '@react-navigation/native';

import {Container, Header, HeaderText, Content, List, ListItem, Icon, ListItemTitle, ListItemText} from './styles';

import logo from '../../../assets/icon.png';

export default function Home({navigation}) {
  const [frases, setFrases] = useState([]);
  const isFocused = useIsFocused();

  async function loadFrases() {
    // const response = await api.get('cifras');

    // setCifras(response.data);

    setFrases([
      {
        id: 1,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        id: 2,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        id: 3,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        id: 4,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        id: 5,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        id: 6,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        id: 7,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        id: 8,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        id: 9,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        id: 10,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
    ]);
  }

  function handleView(id) {
    navigation.navigate('Frase');
  }

  useEffect(() => {
    if (isFocused) {
      loadFrases();
    }
  }, [isFocused]);

  return (
    <Container>
      <Header>
        <HeaderText>Frases</HeaderText>
      </Header>
      <Content>
        <List
          data={frases}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ListItem onPress={() => handleView(item.id)}>
              <ListItemTitle>{item.title}</ListItemTitle>
              <ListItemText> - {item.title}</ListItemText>
            </ListItem>
          )}
        />
      </Content>
    </Container>
  );
}
