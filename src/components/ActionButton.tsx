import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface ActionButtonProps {
  iconName: string;
  label: string;
  onPress?: () => void;
  color?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  iconName,
  label,
  onPress,
  color = '#E50914',
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name={iconName} size={22} color={color} />
      <Text style={[styles.label, { color }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  label: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ActionButton;
