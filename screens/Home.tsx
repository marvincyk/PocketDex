import React, { useState } from "react";
import PokemonLogo from "../components/PokemonLogo";
import SearchBar from "../components/SearchBar";
import PokemonList from "../components/PokemonList";

const Home = () => {
  const [search, setSearch] = useState("");

  const handleChangeText = (value: string) => {
    setSearch(value);
  };

  return (
    <>
      <PokemonLogo />
      <SearchBar
        onChangeText={handleChangeText}
        placeholder="Search for a Pokémon"
        search={search}
      />
      <PokemonList search={search} limit={151} />
    </>
  );
};

export default Home;
