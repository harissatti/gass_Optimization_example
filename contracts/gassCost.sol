 // SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract GasContract {
    struct Student {
        uint id;
        string name;
        uint age;
        string major;
    }
    
    Student[] public students;

    function addStudent(uint _id, string memory _name, uint _age, string memory _major) public {
        students.push(Student(_id, _name, _age, _major));
    }

    function editStudent(uint _index, uint _id, string memory _name, uint _age, string memory _major) public {
        require(_index < students.length, "Index out of bounds");
        students[_index].id = _id;
        students[_index].name = _name;
        students[_index].age = _age;
        students[_index].major = _major;
    }

    function getStudent(uint _index) public view returns (uint, string memory, uint, string memory) {
        require(_index < students.length, "Index out of bounds");
        Student memory student = students[_index];
        return (student.id, student.name, student.age, student.major);
    }
}


// pragma solidity ^0.8.24;

// contract GasContract {
//     struct Student {
//         string name;
//         uint age;
//         string major;
//     }

//     mapping(uint => Student) public students;

//     function addStudent(uint _id, string memory _name, uint _age, string memory _major) public {
//         students[_id] = Student(_name, _age, _major);
//     }

//     function editStudent(uint _id, string memory _name, uint _age, string memory _major) public {
//         require(students[_id].age != 0, "Student does not exist");
//         students[_id].name = _name;
//         students[_id].age = _age;
//         students[_id].major = _major;
//     }

//     function getStudent(uint _id) public view returns (string memory, uint, string memory) {
//         require(students[_id].age != 0, "Student does not exist");
//         Student memory student = students[_id];
//         return (student.name, student.age, student.major);
//     }
// }
