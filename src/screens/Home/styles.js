import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction:row;
  justify-content:center;
  padding:30px 5px 5px 5px;
  border-bottom-width:1px;
  border-bottom-color:rgba(0,0,0,0.1);
  margin-bottom:15px;
  background-color:#d90c1e;
`;

export const HeaderText = styled.Text`
  font-size:18px;
  color:#fff;
`;

export const Content = styled.View`
  display:flex;
  flex-direction:column;
  padding:10px 0;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 10},
})``;

export const ListItem = styled.TouchableOpacity`
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 10px 5px;
  background-color:#d90c1e;
  margin-bottom: 10px;
`;

export const Icon = styled.Image`
  width:32px;
  height:32px;
  border-radius:50;
`
export const ListItemTitle = styled.Text`
  color:#fff;
  font-size:18px;
  padding:0 5px;
  align-self: center;
  text-align:justify;
`;

export const ListItemText = styled.Text`
  color:#f2f2f2;
  font-size:16px;
  padding:0 15px;
  margin-top:15px;
  align-self: center;
  max-width:100%;
  text-align:justify;
`;
