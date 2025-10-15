import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View,Text } from "react-native";
import Layout from "../layout";
import MoviesSection from "../components/MoviesSection";
import { moviesData } from "../data/moviesData";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<typeof moviesData>([] as any);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(moviesData);
      setLoading(false);
    }, 1000); // simulate network
    return () => clearTimeout(timer);
  }, []);
  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <MoviesSection title="Popular Movies" movies={loading ? [] : data} />
          <MoviesSection title="Top Rated" movies={loading ? [] : data} />
          <MoviesSection title="New Releases" movies={loading ? [] : data} />
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
