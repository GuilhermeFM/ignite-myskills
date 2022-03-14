import React, { useEffect, useState, useCallback } from "react";
import { FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";

import Button from "../../components/Button";
import Input from "../../components/Input";

import {
  Container,
  Title,
  Greetings,
  FlatListTitle,
  FlatListEmptyContainer,
  FlatListEmptyIcon,
  FlatListEmptyText,
  FlatListItem,
  FlatListItemContainer,
} from "./styles";

export const Home: React.FC = () => {
  const [greeting, setGreeting] = useState<string | null>(null);
  const [skill, setSkill] = useState<string | null>(null);
  const [skills, addSkill] = useState<string[]>([]);

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
        <FlatListTitle>My Skills</FlatListTitle>
        <FlatList<string>
          style={{ marginTop: 20 }}
          data={skills}
          keyExtractor={(item) => item}
          ListEmptyComponent={() => (
            <FlatListEmptyContainer>
              <FlatListEmptyIcon>¯\_(ツ)_/¯</FlatListEmptyIcon>
              <FlatListEmptyText>
                You don't have any skill yet
              </FlatListEmptyText>
            </FlatListEmptyContainer>
          )}
          renderItem={({ item }) => (
            <FlatListItemContainer activeOpacity={0.7}>
              <FlatListItem>{item}</FlatListItem>
            </FlatListItemContainer>
          )}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
};
