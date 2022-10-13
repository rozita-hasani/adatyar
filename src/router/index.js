import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Category from '../views/Category.vue'
import Suggestion from '../views/Suggestion.vue'
import Creation from '../views/Creation.vue'
import Profile from '../views/Profile.vue'
import HabitList from '../views/Habit-List.vue'
import WeeklyHabit from '../views/Weekly-Habit.vue'
import History from '../views/History.vue'

const routes = [
  {
    path: '/',
    name: 'Register',
    component: Register
  },
    {
      path: '/Category',
      name: 'Category',
      component: Category
    },
    {
      path: '/Category/Suggestion',
      name: 'Suggestion',
      component: Suggestion
    },
    {
      path: '/Category/Creation',
      name: 'Creation',
      component: Creation
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Habit-List',
      name: 'Habit-List',
      component: HabitList
    },
    {
      path: '/Weekly-Habit',
      name: 'Weekly-Habit',
      component: WeeklyHabit
    },
    {
      path: '/History',
      name: 'History',
      component: History
    },
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router