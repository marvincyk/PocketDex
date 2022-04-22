import { Image } from "react-native";
import React from "react";
import tw from "twrnc";

const PokemonLogo = () => {
  return (
    <Image
      source={{
        uri: "https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png",
      }}
      style={tw`w-4/5 h-1/5 mb-8`}
    />
  );
};

export default PokemonLogo;
