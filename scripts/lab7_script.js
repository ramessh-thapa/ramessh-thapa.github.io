//Question No. 1
// The call to askPassword() in the code below should check the password and then call user.loginOk/loginFail depending 
// on the answer.

// But it leads to an error. Why?

// Fix the highlighted line for everything to start working right (other lines are not to be changed).

function askPassword(ok, fail){
    let password = prompt("Password?", '');
    if(password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',
    loginOk(){
        alert(`${this.name} logged in`);
    },
    loginFail(){
        alert(`${this.name} failed to login in`);
    }

};

//askPassword(user.loginOk, user.loginFail);

//Answer: Reason why above commented line is not working.

// Above commented code will not work as expected because the functions loginOk() and loginFail() are passed as callback functions 
// to the askPassword() function, and therefore their this keyword inside the functions will not refer to the user object

//Fix of above code using wrapper function
askPassword(()=>user.loginOk(), ()=>user.loginFail());

//Fix using bind method
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

function askPasswordForCall(ok, fail){
    let password = prompt("Password?", '');
    if(password == "rockstar") ok.call(user);
    else fail.call(user);
}

function askPasswordForApply(ok, fail){
    let password = prompt("Password?", '');
    if(password == "rockstar") ok.apply(user);
    else fail.apply(user);
}


//Fix using call method
askPasswordForCall(user.loginOk, user.loginFail);

//Fix using apply method
askPasswordForApply(user.loginOk, user.loginFail);

//Another way to fix that using call and apply
function askPasswordForCall2(ok, fail){
    let password = prompt("Password?", '');
    if(password == "rockstar") ok.call(this);
    else fail.call(this);
}

//Fix using call method
askPasswordForCall2.call(user, user.loginOk, user.loginFail);

//Fix using apply method
askPasswordForCall2.apply(user, [user.loginOk, user.loginFail]);



//Question 2: Fix the code below using bind

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
      this.students.forEach((student) => {
        console.log(this.title + ": " + student);
      });
    }
  };
  
group.showList.bind(group)();