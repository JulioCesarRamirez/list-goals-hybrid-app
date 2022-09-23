import React, {useState} from 'react';
import {Button, Image, Modal, StyleSheet, TextInput, View} from 'react-native';

interface Props {
  modalIsVisible: boolean;
  onAddGoal: (enteredGoalText: string) => void;
  onCloseModal: () => void;
}

const GoalInput = ({onAddGoal, modalIsVisible, onCloseModal}: Props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };
  const handlerOnPress = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
    onCloseModal();
  };
  return (
    <Modal visible={modalIsVisible} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal-icon.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCloseModal} color={'#F31282'} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={handlerOnPress}
              color={'#B180F0'}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311B6B',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E4D0FF',
    backgroundColor: '#E4D0FF',
    borderRadius: 6,
    color: '#120438',
    width: '90%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
