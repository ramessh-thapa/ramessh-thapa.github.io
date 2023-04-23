class Course {
    constructor(id, code, name) {
        this.id = id;
        this.code = code;
        this.courseName = name;
    }

    save() {
        this.id = Math.max(...db.map(o=>o.id)) + 1;
        db.push(this);
        return this;
    }

    static getAll() {
        return db;
    }

    static findById(stuId) {
        const index = db.findIndex(stu => stu.id == stuId);
        return db[index];
    }

}



let db = [new Course(1001, "CS 505", "Advanced Programming Languages"), 
            new Course(1002, "CS 516", "Cloud Computing"),
            new Course(1003, "CS 522", "Big Data"), 
            new Course(1004, "CS 523", "Big Data Technologies (Data Science)"),  
            new Course(1005, "CS 525", "Advanced Software Design")];

module.exports = Course;