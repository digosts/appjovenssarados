import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import api from '~/services/api';

import Background from '~/components/Background';

import { Container, Title, List, ListItem, ListItemText } from './styles';

export default function Home({ navigation }) {
  const [cifras, setCifras] = useState([]);

  const isFocused = useIsFocused();

  async function loadCifras() {
    // const response = await api.get('cifras');

    // setCifras(response.data);

    setCifras([
      {
        id: 1,
        title: 'Sou casa - Elizeu Alves',
      },
      {
        id: 2,
        title: 'Sou casa - Elizeu Alves',
      },
      {
        id: 3,
        title: 'Sou casa - Elizeu Alves',
      },
      {
        id: 4,
        title: 'Sou casa - Elizeu Alves',
      },
      {
        id: 5,
        title: 'Sou casa - Elizeu Alves',
      },
      {
        id: 6,
        title: 'Sou casa - Elizeu Alves',
      },
      {
        id: 7,
        title: 'Sou casa - Elizeu Alves',
      },
      {
        id: 8,
        title: 'Sou casa - Elizeu Alves',
      },
      {
        id: 9,
        title: 'Sou casa - Elizeu Alves',
      },
      {
        id: 10,
        title: 'Sou casa - Elizeu Alves',
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
    <Background>
      <Container>
        <Title>Cifras</Title>

        <List
          data={cifras}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ListItem onPress={() => handleView(item.id)}>
              <Icon name="add" size={18} color="#333" />
              <ListItemText>{item.title}</ListItemText>
            </ListItem>
          )}
        />
      </Container>
    </Background>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
