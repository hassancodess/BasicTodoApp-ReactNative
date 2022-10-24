import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import GoalItem from './GoalItem'
const GoalsList = ({ goals, handleComplete, handleRemove }) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        renderItem={(itemData) => {
          return (
            <GoalItem
              itemData={itemData}
              handleComplete={handleComplete}
              handleRemove={handleRemove}
            />
          )
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  goalsContainer: {
    flex: 8,
  },
})
export default GoalsList
