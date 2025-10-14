import React from 'react';
import {
  View,
  Text,
  useColorScheme,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

type CardProps = {
  title: string;
  imageSource: ImageSourcePropType;
  description?: string;
};

const Card: React.FC<CardProps> = ({ title, imageSource, description }) => {
  const dark = useColorScheme() === 'dark';

  return (
    <View style={[styles.card, { backgroundColor: dark ? '#1e1e1e' : '#fff' }]}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
      <View style={styles.overlay}>
        <Text style={[styles.title, { color: '#fff' }]} numberOfLines={1}>
          {title}
        </Text>
        {description && (
          <Text
            style={[styles.description, { color: '#fff' }]}
            numberOfLines={2}
          >
            {description}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    width: 180,
    height: 270,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  },
});

export default Card;
