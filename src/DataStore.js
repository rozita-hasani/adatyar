import { LowSync, LocalStorage } from 'lowdb'
class DataStore {
    constructor(){
        this.db =  new LowSync(new LocalStorage("DATA_STORE"));
        this.db.read();
        this.db.data ||= {habits : [], profile:{}, tracker:{}};
        this.db.write();
    }

    createHabit(habit){
        habit.id = crypto.randomUUID();
        this.db.data.habits.push(habit);
        this.db.write();
    }

    saveHabits(habitList){
        this.db.data.habits = habitList;
        this.db.write();
    }

    getHabits(){
        return this.db.data.habits
    }

    saveProfile(detail){
        this.db.data.profile = detail;
        this.db.write();
    }

    getProfile(){
        return this.db.data.profile
    }

    saveTracker(date, doneHabits){
        if (this.db.data.tracker == null) {
            this.db.data.tracker = {}
        }
        this.db.data.tracker[date] = doneHabits;
        this.db.write();
    }

    getTracker(date){
        if (this.db.data.tracker[date] == null) {
            this.db.data.tracker[date] = []
        }
        return this.db.data.tracker[date]
    }
}

var dataStore = new DataStore();
export default dataStore;
