import React from "react";
import { ScrollView, StyleSheet, View,Text } from "react-native";
import Layout from "../layout";
import MoviesSection from "../components/MoviesSection";
import { moviesData } from "../data/moviesData";

const Home = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <MoviesSection title="Popular Movies" movies={moviesData} />
          <MoviesSection title="Top Rated" movies={moviesData} />
          <MoviesSection title="New Releases" movies={moviesData} />
        </ScrollView>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40, 
  },
  footer: {
    marginTop: 20,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  footerLine: {
    height: 1,
    width: "80%",
    backgroundColor: "#ccc",
    marginBottom: 10,
  },
  footerText: {
    color: "#999",
    fontSize: 14,
  },
});

export default Home;
