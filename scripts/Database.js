"user strict";
class Database {
  //method to get users array from localStore
  getAllUser = () => {
    //get string form the localStorage
    const usersStr = localStorage.getItem("users");
    const usersArr = JSON.parse(usersStr); // Convert string to an array

    if (usersStr === null) {
      //if no users in localStorage, dont return null but return empty array
      return [];
    } else {
      return usersArr;
    }
  };
  //method to save a user into the localStor users array
  saveNewUser = (newUser) => {
    //get the array of users saved in the localStorage
    const userArr = this.getAllUser();
    // [{}, {}, {}, newUser ]

    // update the users array and add the new user to it
    const updateUsersArr = [...userArr, newUser];
    //userArr.push(newUser);

    //save back the updated users array to localStorage
    const updatedUsersStr = JSON.stringify(updateUsersArr);
    localStorage.setItem("users", updatedUsersStr);
  };
}

//create an instance (object) of Database
const db = new Database();
