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
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/category/suggestion',
    name: 'Suggestion',
    component: Suggestion
  },
  {
    path: '/category/creation',
    name: 'Creation',
    component: Creation
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/habit-list',
    name: 'Habit-List',
    component: HabitList
  },
  {
    path: '/weekly-habit',
    name: 'Weekly-Habit',
    component: WeeklyHabit
  },
  {
    path: '/history',
    name: 'History',
    component: History
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router