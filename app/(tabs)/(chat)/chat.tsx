import React, { useState, useRef } from "react";
import { Header } from "@/components/Header";
import  Parent  from "@/components/Parent";
import { ScrollView, StyleSheet, View, Text, TextInput } from "react-native";
import { Searchbar } from "react-native-paper";
import data from "@/fake-data/dummy.json";
import { Message } from "@/components/Message";

export default function Chat() {
  const [searchQuery, setSearchQuery] = useState('');

  const inputRefs = Array(6)
    .fill(null)
    .map(() => useRef<TextInput>(null));

  
  

  return (
    <Parent>

      <Header keyphrase="Chats" />
      <Searchbar
        style={styles.searchbar}
        placeholder="Search chats"
        onChangeText={setSearchQuery}
        value={searchQuery}
        mode="bar"
      />
      <ScrollView style={styles.scrollView}>
        {data.map((chat, index) => (
          <Message
            key={index}
            username={chat.username}
            pic={chat.profile_image}
            message={chat.story}
            onMessagePress = {()=>{}}
          />
        ))}
      </ScrollView>
    </Parent>
  );
}

const styles = StyleSheet.create({
  searchbar: {
    width: '80%',
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 0,
    elevation: 2,
    backgroundColor: '#d6f2ff',
    height: 50,
    marginBottom: 10,
  },
  scrollView: {
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 35,
    marginBottom: 10,
    fontFamily: 'Garet',
    color:"#188bc9",
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  digitInput: {
    width: 40,
    height: 50,
    borderWidth: .5,
    color: '#111',
    borderColor: '#eee',
    borderRadius: 2,
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'Garet',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});