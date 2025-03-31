"use client";
import { Flex, Input, Text, VStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { useKana } from "react-use-kana";

const DemoKanjiToKana: FunctionComponent = () => {
  const { kana, setKanaSource } = useKana({ kanaType: "katakana" });
  console.log("kana", kana);
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
        onChange={(e) => {
          setKanaSource(e.target.value);
        }}
      />
      <VStack w="50%" alignItems="start" mt="2rem">
        <Text>Converted Kana Below</Text>
        <Text w="50%">{kana}</Text>
      </VStack>
    </Flex>
  );
};

export default DemoKanjiToKana;
