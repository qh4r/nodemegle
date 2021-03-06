const User = require('./user');
const ACTIVE_USERS_LIST = Symbol('ACTIVE_USERS_LIST');
class UsersStore {
    constructor() {
        this[ACTIVE_USERS_LIST] = [];
    }

    isUsernameAvailable(name) {
        return !this[ACTIVE_USERS_LIST].filter(x => x.userName == name).length;
    }

    addUser(user) {
        if (user instanceof User) {
            this[ACTIVE_USERS_LIST].push(user);
        }
    }

    removeUser(user) {
        this[ACTIVE_USERS_LIST].splice(this[ACTIVE_USERS_LIST].indexOf(user), 1);
    }
    
    printActiveUsers(){
        console.log(this[ACTIVE_USERS_LIST].map(x => x.userName));
    }

    getSearchingUsers(id){
        return this[ACTIVE_USERS_LIST].filter(x => x.isSearching && x.userId != id)
    }

}

const usersStore = new UsersStore();
module.exports = usersStore;