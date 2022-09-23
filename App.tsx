import React, {useState} from 'react';
import {StyleSheet, FlatList, View, Button, StatusBar} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import {Goal} from './interfaces/Goals';

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  const startAddModalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddModalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText: string) => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  };

  const handleDeleteItem = (id: string) => {
    setCourseGoals(currentGoals => currentGoals.filter(goal => goal.id !== id));
  };
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color={'#A065EC'}
          onPress={startAddModalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          onCloseModal={endAddModalHandler}
          modalIsVisible={modalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={itemData => (
              <GoalItem itemData={itemData} onDeleteItem={handleDeleteItem} />
            )}
            keyExtractor={item => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
};
export default App;

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#1E085A',
    paddingTop: 70,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
