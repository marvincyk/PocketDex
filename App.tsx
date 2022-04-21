import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  Image,
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
        <Image
          source={{
            uri: "https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png",
          }}
          style={tw`w-4/5 h-1/5 mb-8`}
        />
        <SearchBar
          onChangeText={handleChangeText}
          placeholder="Search for a Pokémon"
          search={search}
        />
        <View style={tw`w-4/5 h-2/3 mt-10`}>
          <FlatList
            data={data.pokemon.filter((pokemon) => {
              if (
                search == "" ||
                pokemon.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return pokemon;
              }
            })}
            renderItem={({ item }) => (
              <TouchableCard
                image={item.image}
                name={item.name}
                key={item.id}
              />
            )}
            numColumns={3}
            initialNumToRender={12}
          />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
