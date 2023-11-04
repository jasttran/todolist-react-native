import React from "react";
import { TouchableOpacity} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ItemIcon({ name, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={name} size={26} color="#B7D1D3" />
    </TouchableOpacity>
  );
}
