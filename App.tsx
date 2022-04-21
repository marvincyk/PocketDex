import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import tw from "twrnc";
import TouchableCard from "./components/TouchableCard";
import SearchBar from "./components/SearchBar";
import data from "./data.json";

export default function App() {
  const [search, setSearch] = useState("");

  const handleChangeText = (value: string) => {
    setSearch(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={tw`flex bg-white items-center justify-center h-full w-full`}
      >
        <SearchBar
          onChangeText={handleChangeText}
          placeholder="Search for a Pokémon"
          search={search}
        />
        <View style={tw`flex flex-row flex-wrap w-4/5 justify-around mt-6`}>
          {data.pokemon
            .filter((pokemon) => {
              if (
                search == "" ||
                pokemon.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return pokemon;
              }
            })
            .map((pokemon) => (
              <TouchableCard
                image={pokemon.image}
                name={pokemon.name}
                key={pokemon.id}
              />
            ))}
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
