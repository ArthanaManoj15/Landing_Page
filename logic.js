class Landings {
    // Properties

    dataBase1 = {
        "Ruaan": { username: "Ruaan", password: "1923" },
        "Anu": { username: "Anu", password: "123" },
        "Ammu": { username: "Ammu", password: "456" },
        "Vys": { username: "Vys", password: "7890" },
        "Vysh": { username: "Vysh", password: "78900" },
        "Athu": { username: "Athu", password: "2208" }
    }




// store data in local storage 

// Method
save() {
    if (this.dataBase1) {
        localStorage.setItem("dataBase1", JSON.stringify(this.dataBase1))
        // JSON.stringify
        // dataBase1 is a property inside a class, so use this.dataBase1
    }

}
// check whether user already exist or not
// get data
getData() {
    this.dataBase1 = JSON.parse(localStorage.getItem("dataBase1"))
    //JSON.parse-convert string to object ----coz local storage stores data as only string
}
// function save(){}

// method for register
register() {
    this.getData()
    console.log('inside register function');
    let user = regUser.value
    let pswd = regPswd.value
    console.log(user, pswd);
    if (user == "" | pswd == "") {
        alert('Please fill the form completely')
    }
    else {
        if (user in this.dataBase1) {
            alert('User already exist')
        }
        else {
            this.dataBase1[user] = { username: user, password: pswd }
            this.save()
            alert('User added successfully')
            regUser.value = ""
            regPswd.value = ""
            // method used to navigate if login is success
            window.location = "login.html"
        }

    }
}

// Login
login() {
    // to get values from i/p box, create an id
    let luser = loginUser.value
    let lpswd = loginPswd.value
    console.log(luser, lpswd);
    this.getData
    if (luser == "" | lpswd == "") {
        alert("Please fill the form completely")
    }
    else {
        if (luser in this.dataBase1) {
            if (this.dataBase1[luser].password == lpswd) {
                alert('Login successfull')
                localStorage.setItem("user", luser)
                window.location = 'home.html'
            } else {
                alert('Wrong Username or Password')
            }
        }
        else {
            alert('Wrong Username or Password')
        }
    }
}
}

// object
const obj = new Landings
// obj.save()
obj.getData