import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
  Pressable,
  Switch,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  ImageBackground,
  Platform,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

type Note = {
  id: string;
  title: string;
  content: string;
  date: string;
};

const INITIAL_NOTES: Note[] = [
  {
    id: "1",
    title: "React Native",
    content: "Learn components and styling",
    date: "20 May 2026",
  },
  {
    id: "2",
    title: "Expo SDK 55",
    content: "Understand Expo Router",
    date: "21 May 2026",
  },
];

const NotesScreen = () => {
  const systemTheme = useColorScheme();
  const { width } = useWindowDimensions();

  const [isDark, setIsDark] = useState(systemTheme === "dark");
  const [notes, setNotes] = useState<Note[]>(INITIAL_NOTES);
  const [search, setSearch] = useState("");
  const [currentView, setCurrentView] = useState("list");
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const isTablet = width >= 768;

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()),
  );

  const COLORS = isDark
    ? {
        background: "#121416",
        card: "#1a1d21",
        text: "#f3f4f6",
        subText: "#9ca3af",
        border: "#2d3139",
        input: "#1a1d21",
        primary: "#52aba4",
      }
    : {
        background: "#faf9f6",
        card: "#ffffff",
        text: "#1c1e21",
        subText: "#6b7280",
        border: "#e5e7eb",
        input: "#ffffff",
        primary: "#14b8a6",
      };

  const openNote = (note: Note) => {
    setSelectedNote(note);
    setCurrentView("editor");
  };

  const saveNote = () => {
    if (!selectedNote) return;

    const updatedNotes = notes.map((note) =>
      note.id === selectedNote.id ? selectedNote : note,
    );

    setNotes(updatedNotes);
    setCurrentView("list");
  };

  if (currentView === "list") {
    return (
      <SafeAreaView
        edges={["top"]}
        style={[
          styles.container,
          {
            backgroundColor: COLORS.background,
            paddingHorizontal: isTablet ? 40 : 20,
          },
        ]}
      >
        <StatusBar
          barStyle={isDark ? "light-content" : "dark-content"}
          backgroundColor={isDark ? "#121416" : "#faf9f6"}
        />

        <View style={styles.header}>
          <Text style={[styles.heading, { color: COLORS.text }]}>My Notes</Text>

          <View style={styles.switchRow}>
            <Ionicons
              name={isDark ? "moon" : "sunny"}
              size={22}
              color={COLORS.text}
            />

            <Switch value={isDark} onValueChange={setIsDark} />
          </View>
        </View>

        <View
          style={[
            styles.searchContainer,
            {
              backgroundColor: COLORS.input,
              borderColor: COLORS.border,
            },
          ]}
        >
          <Ionicons name="search" size={20} color={COLORS.subText} />

          <TextInput
            placeholder="Search notes..."
            placeholderTextColor={COLORS.subText}
            value={search}
            onChangeText={setSearch}
            style={[
              styles.searchInput,
              {
                color: COLORS.text,
              },
            ]}
          />
        </View>

        <FlatList
          data={filteredNotes}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 30,
          }}
          ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => openNote(item)}
              style={({ pressed }) => [
                styles.card,
                {
                  backgroundColor: COLORS.card,
                  borderColor: COLORS.border,
                },
                pressed && styles.pressedCard,
              ]}
            >
              <View style={styles.cardTop}>
                <Text
                  style={[
                    styles.noteTitle,
                    {
                      color: COLORS.text,
                    },
                  ]}
                >
                  {item.title}
                </Text>

                <Ionicons
                  name="document-text"
                  size={22}
                  color={COLORS.primary}
                />
              </View>

              <Text
                numberOfLines={2}
                style={[
                  styles.noteContent,
                  {
                    color: COLORS.subText,
                  },
                ]}
              >
                {item.content}
              </Text>

              <Text
                style={[
                  styles.noteDate,
                  {
                    color: COLORS.subText,
                  },
                ]}
              >
                {item.date}
              </Text>
            </Pressable>
          )}
        />
      </SafeAreaView>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={[
        styles.container,
        {
          backgroundColor: COLORS.background,
        },
      ]}
    >
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        translucent
        backgroundColor="transparent"
      />

      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
        }}
        style={styles.imageHeader}
        imageStyle={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View style={styles.overlay}>
          <Text style={styles.headerText}>Edit Note</Text>
        </View>
      </ImageBackground>

      <View style={styles.editorContainer}>
        <TextInput
          value={selectedNote?.title ?? ""}
          onChangeText={(text) =>
            setSelectedNote((current) =>
              current
                ? {
                    ...current,
                    title: text,
                  }
                : current,
            )
          }
          placeholder="Note Title"
          placeholderTextColor={COLORS.subText}
          style={[
            styles.titleInput,
            {
              backgroundColor: COLORS.input,
              color: COLORS.text,
              borderColor: COLORS.border,
            },
          ]}
        />

        <TextInput
          multiline
          textAlignVertical="top"
          value={selectedNote?.content ?? ""}
          onChangeText={(text) =>
            setSelectedNote((current) =>
              current
                ? {
                    ...current,
                    content: text,
                  }
                : current,
            )
          }
          placeholder="Write something..."
          placeholderTextColor={COLORS.subText}
          style={[
            styles.contentInput,
            {
              backgroundColor: COLORS.input,
              color: COLORS.text,
              borderColor: COLORS.border,
            },
          ]}
        />

        <View style={styles.buttonRow}>
          <Pressable
            onPress={() => setCurrentView("list")}
            style={[
              styles.button,
              {
                backgroundColor: "#FF5252",
              },
            ]}
          >
            <Ionicons name="arrow-back" size={20} color="#FFF" />
            <Text style={styles.buttonText}>Back</Text>
          </Pressable>

          <Pressable
            onPress={saveNote}
            style={[
              styles.button,
              {
                backgroundColor: COLORS.primary,
              },
            ]}
          >
            <Ionicons name="save" size={20} color="#FFF" />
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NotesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 10,
  },

  heading: {
    fontSize: 32,
    fontWeight: "700",
  },

  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 14,
    marginBottom: 20,
  },

  searchInput: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 10,
    fontSize: 16,
  },

  card: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 18,
  },

  pressedCard: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  noteTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },

  noteContent: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 14,
  },

  noteDate: {
    fontSize: 13,
  },

  imageHeader: {
    height: 220,
    justifyContent: "flex-end",
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerText: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "700",
  },

  editorContainer: {
    flex: 1,
    padding: 20,
  },

  titleInput: {
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 18,
    marginBottom: 20,
  },

  contentInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    fontSize: 16,
    marginBottom: 20,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 14,
  },

  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingVertical: 14,
    borderRadius: 14,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
