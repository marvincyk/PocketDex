import React, { useState } from "react";
import { TextInput } from "react-native";
import tw from "twrnc";

function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <TextInput
      style={tw`w-4/5 border rounded-full p-4`}
      clearButtonMode="unless-editing"
      returnKeyType="search"
      onChangeText={(value) => setSearch(value)}
      placeholder="Search for a Pokémon"
      value={search}
    />
  );
}

export default SearchBar;
