import React from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
  Linking,
} from "react-native";

const PROJECTS = [
  {
    title: "FairShare — Expense Splitter",
    desc: "Split expenses among friends with groups, settlements, and insights.",
    stack: ["React", "Node", "Express", "MySQL"],
    github: "https://github.com/Varun-here/FairShare",
    demo: "",
  },
  {
    title: "Career & Job Advisor",
    desc: "AI-powered LMS & job matching with resume tips and interview prep.",
    stack: ["Next.js", "TypeScript", "Postgres", "Prisma"],
    github: "",
    demo: "",
  },
  {
    title: "Fitness & Diet App",
    desc: "Personalized workout and nutrition plans using basic recommender ideas.",
    stack: ["React Native", "Expo"],
    github: "",
    demo: "",
  },
];

const Btn = ({ title, href }) =>
  href ? (
    <Pressable onPress={() => Linking.openURL(href)} style={styles.btn}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  ) : null;

export default function Projects() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Projects</Text>
      <View style={{ gap: 12 }}>
        {PROJECTS.map((p) => (
          <View key={p.title} style={styles.card}>
            <Text style={styles.cardTitle}>{p.title}</Text>
            <Text style={styles.cardDesc}>{p.desc}</Text>
            <View style={styles.tags}>
              {p.stack.map((t) => (
                <Text key={t} style={styles.tag}>
                  #{t}
                </Text>
              ))}
            </View>
            <View style={styles.row}>
              <Btn title="GitHub" href={p.github} />
              <Btn title="Live Demo" href={p.demo} />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const ACCENT = "#0f8f2f";

const styles = StyleSheet.create({
  container: { padding: 20, gap: 12 },
  title: { fontSize: 22, fontWeight: "800", color: "#111827" },

  card: {
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 16,
    gap: 8,
  },
  cardTitle: { fontSize: 18, fontWeight: "700", color: "#111827" },
  cardDesc: { color: "#6B7280" },
  tags: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 4 },
  tag: {
    backgroundColor: "#eef6ef",
    color: ACCENT,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  row: { flexDirection: "row", gap: 10, marginTop: 8 },

  btn: {
    backgroundColor: ACCENT,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnText: { color: "#fff", fontWeight: "600" },
});
