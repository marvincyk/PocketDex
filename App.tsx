import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import tw from "twrnc";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <SafeAreaView
      style={tw`flex bg-white items-center justify-center h-full w-full`}
    >
      <SearchBar />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
