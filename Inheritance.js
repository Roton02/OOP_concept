//inheritance 

class Teacher {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class child extends Teacher {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
}

const jhankar = new child("Jhankar", 21, 12);