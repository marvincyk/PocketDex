import { View, Image, Text } from "react-native";
import React from "react";
import tw from "twrnc";

interface CardProps {
  image: string;
  name: string;
}

const Card = ({ image, name }: CardProps) => {
  return (
    <View style={tw`w-1/3 h-1/4 flex items-center justify-center m-2`}>
      <Image
        source={{
          uri: image,
        }}
        style={tw`w-1/2 h-1/2`}
      />
      <Text>{name}</Text>
    </View>
  );
};

export default Card;
