const screenForNames = (arr) => {

    let validator = /^\S(Mr. |Mrs. |Ms. |Dr. )[\w\s]/g;



    let newArr = arr.filter(str => {
        if (validator.test(str)) {
            return str
        }

    })

    return newArr;

}

console.log(screenForNames(['Mr. Brown', ' Ms. Red', 'Dr. Blue', 'Mrs.', '', 'Ms. Black', 'dr. Green', 'Mrs. Orange', 'Purple', 'Mr.  Pink']));