import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Category from '../views/Category.vue'
import Suggestion from '../views/Suggestion.vue'
import Creation from '../views/Creation.vue'
import TodayHabits from '../views/Today-Habits.vue'
import HabitsList from '../views/Habits-List.vue'
import Calendar from '../views/Calendar.vue'

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
    path: '/today-habits',
    name: 'Today-Habits',
    component: TodayHabits
  },
  {
    path: '/habits-list',
    name: 'Habits-List',
    component: HabitsList
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router