import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #121015;
  padding-horizontal: 25px;
  padding-vertical: 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const Greetings = styled.Text`
  margin-top: 5px;
  color: #ffffff55;
  font-size: 12px;
`;

export const List = styled.FlatList`
  margin-top: 25px;
`;

export const ListTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;

  margin-top: 30px;
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
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 99px;
  background-color: #1f1e25;
`;

export const ListItem = styled.Text`
  color: #fff;
  font-size: 17px;
`;
