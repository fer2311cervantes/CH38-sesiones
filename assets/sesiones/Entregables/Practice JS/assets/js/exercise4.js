
let student1Courses = ['Math', 'English', 'Programming','Biology'];
let student2Courses = ['Geography', 'Spanish', 'Programming','English'];

const commonIncludes = ( arr1, arr2 ) => {
    const result = [];
    arr1.forEach(element => {
        if(arr2.includes(element)) result.push(element);
    });
    return result;
}
let commonCourses = commonIncludes(student1Courses, student2Courses)

const printData = (id,data) => document.getElementById(id).innerHTML = data;
const getInputValueID = (id) => document.getElementById(id).value;
const printListID = (id,list) => document.getElementById(id).innerHTML = list.join("");
const highlightList = (list,arr) => list.map(e => `<li class="${ arr.includes(e) ? "list-group-item list-group-item-primary" : "list-group-item" }">${e}</li>`);

//print once in console
console.log( `student1Courses = ${student1Courses}` );
console.log( `student2Courses = ${student2Courses}` );
console.log( `commonCourses = ${commonIncludes(student1Courses, student2Courses)}` );

const updateList = () => {
    commonCourses = commonIncludes(student1Courses, student2Courses)
    printListID("firstList",highlightList(student1Courses,commonCourses));
    printListID("secondList",highlightList(student2Courses,commonCourses));
    printData("commonList",commonCourses.join(", "));
}
updateList();
const addElement1 = () => {
    let name = getInputValueID("input1");
    name || (name = 0); //__________________________________
    student1Courses.push(name);
    updateList();
}
const removeElement1 = () =>{
    student1Courses.pop();
    updateList();
}
const addElement2 = () => {
    let name = getInputValueID("input2");
    name || (name = 0); //__________________________________
    student2Courses.push(name);
    updateList();
}
const removeElement2 = () =>{
    student2Courses.pop();
    updateList();
}

//const simpleList = (list) => list.map(e => `<li class="list-group-item">${e}</li>`);
//printListID("firstList",simpleList(student1Courses));
//printListID("secondList",simpleList(student2Courses));