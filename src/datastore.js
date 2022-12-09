import { LowSync, LocalStorage } from 'lowdb'
class DataStore {
    constructor() {
        this.db = new LowSync(new LocalStorage("DATA_STORE"));
        this.db.read();
        this.db.data ||= { habits: [], tracker: {}, darkMode: false };
        this.db.write();
    }

    generateUniqueId(){
        return Math.floor((Math.random()) * 0x10000)
    }

    createHabit(habit) {
        habit.id = this.generateUniqueId();
        this.db.data.habits.push(habit);
        this.db.write();
    }

    saveHabits(habitList) {
        this.db.data.habits = habitList;
        this.db.write();
    }

    getHabits() {
        return this.db.data.habits
    }

    saveTracker(date, doneHabits) {
        if (this.db.data.tracker == null) {
            this.db.data.tracker = {}
        }
        this.db.data.tracker[date] = doneHabits;
        this.db.write();
    }

    getTracker(date) {
        if (this.db.data.tracker[date] == null) {
            this.db.data.tracker[date] = []
        }
        return this.db.data.tracker[date]
    }

    saveMode(mode){
        this.db.data.darkMode = mode;
        this.db.write();
    }

    getMode() {
        return this.db.data.darkMode
    }
}

var dataStore = new DataStore();
export default dataStore;