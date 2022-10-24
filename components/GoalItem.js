import React, { useState } from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

const GoalItem = ({ itemData, handleComplete, handleRemove }) => {
  const [isActive, setIsActive] = useState(false)
  const changeColor = () => {
    setIsActive((prev) => !prev)
    console.log(isActive)
  }
  return (
    <View>
      <Pressable
        onPress={() => changeColor()}
        android_ripple={{ color: '#dddddd' }}
        style={[styles.goalContainer, isActive && styles.goalContainerPressed]}
      >
        <Text
          style={[
            styles.goalText,
            itemData.item.complete && styles.goalTextCompleted,
          ]}
        >
          {itemData.item.text}
        </Text>
        <View style={styles.goalActions}>
          <Text
            style={[styles.goalActionText, { backgroundColor: '#e63946' }]}
            onPress={() => handleRemove(itemData.item.id)}
          >
            Delete
          </Text>
          <Text
            style={[
              styles.goalActionText,
              itemData.item.complete && styles.disabled,
            ]}
            onPress={() => handleComplete(itemData.item.id)}
          >
            Complete
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalContainer: {
    backgroundColor: '#023047',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 6,
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goalContainerPressed: {
    backgroundColor: '#219ebc',
  },
  goalText: {
    color: 'white',
    fontSize: 16,
    width: '65%',
  },
  goalTextCompleted: {
    textDecorationLine: 'line-through',
  },
  goalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  goalActionText: {
    color: 'white',
    fontSize: 10,
    backgroundColor: '#00b4d8',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  disabled: {
    backgroundColor: '#ffd60a',
  },
})

export default GoalItem
