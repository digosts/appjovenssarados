import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

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

export const ListItem = styled(RectButton)`
  flex-direction: row;
  align-content: center;
  align-items: center;
  padding: 15px;
  background: rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

export const ListItemText = styled.Text`
  font-size: 20px;
  color: #333;
  align-self: center;
  margin-left: 10px;
`;
