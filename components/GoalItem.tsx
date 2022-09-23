import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListRenderItemInfo,
  Pressable,
} from 'react-native';
import {Goal} from '../interfaces/Goals';

interface Props {
  itemData: ListRenderItemInfo<Goal>;
  onDeleteItem: (item: string) => void;
}

const GoalItem = ({itemData, onDeleteItem}: Props) => {
  return (
    <Pressable onPress={onDeleteItem.bind(this, itemData.item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5E0ACC',
  },
  goalText: {
    color: 'white',
  },
});
