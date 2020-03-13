import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const Text = styled.Text`
  font-size: 20px;
  color: #333;
  align-self: center;
  margin-top: 20px;
`;

export const ListItem = styled.View`
  flex-direction: row;
  align-content: center;
  align-items: center;
`;
