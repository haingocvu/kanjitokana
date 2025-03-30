"use client";
import { Flex, Input, Text, VStack } from "@chakra-ui/react";
import { ChangeEventHandler, FunctionComponent, useState } from "react";
import { toKatakana } from "wanakana";

const DemoKanjiToKana: FunctionComponent = () => {
  const [enteredText, setEnteredText] = useState("");
  const handleChangeKanji: ChangeEventHandler<HTMLInputElement> = (
    textChanged
  ) => {
    setEnteredText(textChanged.target.value);
  };
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      mt="2rem"
      alignItems="center"
    >
      <Input
        placeholder="Enter Kanji here"
        variant="outline"
        w="50%"
        px="1rem"
        value={enteredText}
        onChange={handleChangeKanji}
      />
      <VStack w="50%" alignItems="start" mt="2rem">
        <Text>Converted Kana Below</Text>
        <Text w="50%">{toKatakana(enteredText, {})}</Text>
      </VStack>
    </Flex>
  );
};

export default DemoKanjiToKana;
