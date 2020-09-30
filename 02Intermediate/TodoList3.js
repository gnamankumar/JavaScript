let myTodos ={
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(){
        console.log(this);

    }
}

let myTodos2 ={
    day: 'Tuesday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num){
        this.meetings = this.meetings + num

    },

    summary: function(){
        return`You have ${this.meetings} meetings today!`
    }
}


myTodos.addMeeting()
myTodos2.addMeeting(4)

console.log(myTodos2.summary());
