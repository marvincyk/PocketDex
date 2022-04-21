import React from "react";
import { TextInput } from "react-native";
import tw from "twrnc";

interface SearchBarProps {
  onChangeText: (value: string) => void;
  search: string;
  placeholder?: string;
}

function SearchBar({ onChangeText, search, placeholder }: SearchBarProps) {
  return (
    <TextInput
      style={tw`w-4/5 border rounded-full p-4`}
      clearButtonMode="unless-editing"
      returnKeyType="search"
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={search}
    />
  );
}

export default SearchBar;
