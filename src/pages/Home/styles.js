import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #121015;
  padding-horizontal: 30px;
  padding-vertical: 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  color: #fff;
  background-color: #1f1e25;
  font-size: 18px;
  padding: 15px;
  margin-top: 30px;
  border-radius: 7px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #a370f7;
  padding: 15px;
  border-radius: 7px;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;

export const List = styled.FlatList`
  margin-top: 25px;
`;

export const ListEmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ListEmptyIcon = styled.Text`
  color: #fff;
  font-size: 17px;
  padding: 5px;
  text-align: center;
`;

export const ListEmptyText = styled.Text`
  color: #fff;
  font-size: 17px;
  padding: 5px;
  text-align: center;
`;

export const ListItemContainer = styled.TouchableOpacity`
  padding: 10px;
  margin-vertical: 4px;
  border-radius: 10px;
  background-color: #1f1e25;
`;

export const ListItem = styled.Text`
  color: #fff;
  font-size: 17px;
`;
