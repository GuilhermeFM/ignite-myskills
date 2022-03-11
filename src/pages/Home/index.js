import React, { useState, useCallback } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

import {
  Container,
  Title,
  Button,
  ButtonText,
  Input,
  List,
  ListEmptyContainer,
  ListEmptyIcon,
  ListEmptyText,
  ListItem,
  ListItemContainer,
} from "./styles";

export const Home = () => {
  const [skill, setSkill] = useState(null);
  const [skills, addSkill] = useState([]);

  const handleAdd = useCallback(() => {
    if (!skill) {
      return;
    }

    const exists = skills.find((s) => s == skill);

    if (exists) {
      return;
    }

    setSkill(null);
    addSkill((prev) => [skill, ...prev]);
  }, [skill, skills]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <Title>Welcome, Guilherme</Title>
        <Input
          placeholder="New skill"
          placeholderTextColor="#555"
          onChangeText={setSkill}
          value={skill}
          onSubmitEditing={handleAdd}
        />
        <Button activeOpacity={0.7} onPress={handleAdd}>
          <ButtonText>Add</ButtonText>
        </Button>
        <List
          data={skills}
          ListEmptyComponent={() => (
            <ListEmptyContainer>
              <ListEmptyIcon>¯\_(ツ)_/¯</ListEmptyIcon>
              <ListEmptyText>You don't have any skill yet</ListEmptyText>
            </ListEmptyContainer>
          )}
          renderItem={({ item }) => (
            <ListItemContainer activeOpacity={0.7}>
              <ListItem key={item}>{item}</ListItem>
            </ListItemContainer>
          )}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
};
