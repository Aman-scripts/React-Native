import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  style?: any;
}

const Skeleton: React.FC<SkeletonProps> = ({ width = '100%', height = 16, borderRadius = 8, style }) => {
  const shimmer = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(shimmer, {
        toValue: 1,
        duration: 1200,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    loop.start();
    return () => loop.stop();
  }, [shimmer]);

  const translateX = shimmer.interpolate({ inputRange: [0, 1], outputRange: [-50, 300] });

  return (
    <View style={[styles.container, { width, height, borderRadius }, style]}>
      <Animated.View
        style={[
          styles.shimmer,
          {
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: '#e3e3e3',
  },
  shimmer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 80,
    backgroundColor: '#f0f0f0',
    opacity: 0.6,
  },
});

export default Skeleton;


