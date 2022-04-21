import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

interface TouchableCardProps {
  image: string;
  name: string;
}

const TouchableCard = ({ image, name }: TouchableCardProps) => {
  return (
    <TouchableOpacity style={tw`w-1/3 flex items-center justify-center pb-10`}>
      <Image
        source={{
          uri: image,
        }}
        style={tw`w-20 h-20`}
      />
      <Text style={tw`font-semibold`}>{name}</Text>
    </TouchableOpacity>
  );
};

export default TouchableCard;
