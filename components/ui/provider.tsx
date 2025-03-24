"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import StoreProvider from "./store-provider";

export function Provider(props: ColorModeProviderProps) {
  return (
    <StoreProvider>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </StoreProvider>
  );
}
