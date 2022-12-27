import React from "react";
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";

export function useLoadFonts() {
  const [isOswaldLoaded] = useFonts({
    Oswald_400Regular
  });
  const [isLatoLoaded] = useFonts({
    Lato_400Regular
  });

  return { areFontsLoaded: isOswaldLoaded && isLatoLoaded };
}
