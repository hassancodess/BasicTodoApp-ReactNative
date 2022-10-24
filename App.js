import { useState } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import uuid from 'react-native-uuid'
import GoalInput from './components/GoalInput'
import GoalsList from './components/GoalsList'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [goals, setGoals] = useState([])

  // Add Goal
  const handleAdd = (goalText) => {
    if (goalText.length > 2) {
      setGoals((prev) => {
        return [...prev, { id: uuid.v4(), text: goalText, complete: false }]
      })
    }
  }
  // Remove Goal
  const handleRemove = (id) => {
    setGoals((prev) => {
      return goals.filter((item) => item.id !== id)
    })
  }

  // Complete Goal
  const handleComplete = (id) => {
    setGoals(
      goals.map((goal) => {
        if (goal.id == id) {
          goal.complete = !goal.complete
        }
        return goal
      })
    )
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title='Add New Goal'
        color='#219ebc'
        onPress={() => setIsModalVisible((prev) => !prev)}
      />
      {isModalVisible && (
        <GoalInput
          handleAdd={handleAdd}
          setIsModalVisible={setIsModalVisible}
        />
      )}
      <GoalsList
        goals={goals}
        handleComplete={handleComplete}
        handleRemove={handleRemove}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
})
