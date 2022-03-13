import React, { useEffect, useState, useCallback } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

import Button from "../../components/Button";
import Input from "../../components/Input";

import {
  Container,
  Title,
  Greetings,
  List,
  ListTitle,
  ListEmptyContainer,
  ListEmptyIcon,
  ListEmptyText,
  ListItem,
  ListItemContainer,
} from "./styles";

export const Home = () => {
  const [greeting, setGreeting] = useState(null);
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

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good nigth");
    }
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <Title>Welcome, Guilherme</Title>
        <Greetings>{greeting}</Greetings>
        <Input
          value={skill}
          onChangeText={setSkill}
          onSubmitEditing={handleAdd}
          placeholder="New skill"
          placeholderTextColor="#555"
        />
        <Button activeOpacity={0.7} onPress={handleAdd}>
          Add
        </Button>
        <ListTitle>My Skills</ListTitle>
        <List
          data={skills}
          keyExtractor={(item) => item}
          ListEmptyComponent={() => (
            <ListEmptyContainer>
              <ListEmptyIcon>¯\_(ツ)_/¯</ListEmptyIcon>
              <ListEmptyText>You don't have any skill yet</ListEmptyText>
            </ListEmptyContainer>
          )}
          renderItem={({ item }) => (
            <ListItemContainer activeOpacity={0.7}>
              <ListItem>{item}</ListItem>
            </ListItemContainer>
          )}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
};
