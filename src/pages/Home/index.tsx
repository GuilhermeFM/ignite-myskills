import React, { useEffect, useState, useCallback } from "react";
import { FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";
import { isYesterday, isToday, format } from "date-fns";

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
  FlatListItemTitle,
  FlatListItemDate,
} from "./styles";

interface ISkill {
  id: number;
  title: string;
  date: string;
}

export const Home: React.FC = () => {
  const [greeting, setGreeting] = useState<string | null>(null);
  const [skill, setSkill] = useState<string | null>(null);
  const [skills, addSkill] = useState<ISkill[]>([]);

  const handleAdd = useCallback(() => {
    if (!skill) {
      return;
    }

    const exists = skills.find((s) => s.title == skill);

    if (exists) {
      return;
    }

    const currentDate = new Date();

    let currentDateString: string;

    if (isYesterday(currentDate)) {
      currentDateString = "Added Yesterday";
    } else if (isToday(currentDate)) {
      currentDateString = "Added Today";
    } else {
      currentDateString = `Added in ${format(currentDate, "dd/MM/yyyy")}`;
    }

    addSkill((prev) => {
      const nextId = prev.length > 0 ? prev[0].id + 1 : 1;
      return [{ id: nextId, date: currentDateString, title: skill }, ...prev];
    });

    setSkill(null);
  }, [skill, skills]);

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good night");
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
          placeholder="Add your skill here :)"
          placeholderTextColor="#555"
        />
        <Button activeOpacity={0.7} onPress={handleAdd}>
          Add
        </Button>
        <FlatListTitle>My Skills</FlatListTitle>
        <FlatList<ISkill>
          style={{ marginTop: 20 }}
          data={skills}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={() => (
            <FlatListEmptyContainer>
              <FlatListEmptyIcon>¯\_(ツ)_/¯</FlatListEmptyIcon>
              <FlatListEmptyText>
                You don't have any skill yet
              </FlatListEmptyText>
            </FlatListEmptyContainer>
          )}
          renderItem={({ item }) => (
            <FlatListItem activeOpacity={0.7}>
              <FlatListItemTitle>{item.title}</FlatListItemTitle>
              <FlatListItemDate>{item.date}</FlatListItemDate>
            </FlatListItem>
          )}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
};
