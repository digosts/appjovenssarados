import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useIsFocused } from '@react-navigation/native';

import {Container, Header, HeaderText, Content, List, ListItem, Image, ListItemText} from './styles';

import logo from '../../../assets/icon.png';

export default function Cifras({navigation}) {
  const [cifras, setCifras] = useState([]);
  const isFocused = useIsFocused();

  async function loadCifras() {
    // const response = await api.get('cifras');

    // setCifras(response.data);

    setCifras([
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
    navigation.navigate('Cifra');
  }

  useEffect(() => {
    if (isFocused) {
      loadCifras();
    }
  }, [isFocused]);
  
  return (
    <Container>
      <Header>
        <HeaderText>Cifras</HeaderText>
      </Header>
      <Content>
        <List
          data={cifras}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ListItem onPress={() => handleView(item.id)}>
              <Image source={logo}/>
              <ListItemText>{item.title}</ListItemText>
            </ListItem>
          )}
        />
      </Content>
    </Container>
  );
}
