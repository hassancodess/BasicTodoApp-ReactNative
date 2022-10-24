import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native'
const GoalInput = ({ handleAdd, setIsModalVisible }) => {
  const [goalText, setGoalText] = useState('')
  // On Input Change
  const handleTextChange = (text) => {
    setGoalText(text)
  }
  return (
    <Modal animationType='fade' style={styles.modal}>
      <Button
        title='Close Modal'
        color='#023047'
        onPress={() => setIsModalVisible((prev) => !prev)}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter your course goal...'
          style={styles.inputText}
          onChangeText={handleTextChange}
          value={goalText}
        />
        <Button
          title='Add Goal'
          onPress={() => {
            handleAdd(goalText)
            setGoalText('')
          }}
          color='#003566'
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#003566',
    marginBottom: 20,
  },
  inputText: {
    borderWidth: 1,
    borderColor: 'white',
    width: '80%',
    marginRight: 8,
    borderColor: '#003566',
    borderWidth: 1.5,
    padding: 10,
  },
  modal: {
    backgroundColor: '#023047',
  },
})

export default GoalInput
