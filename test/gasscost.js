const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GasContract", function () {
    let GasContract;
    let gasContract;

    it("deploying",async () => {
        GasContract = await ethers.getSigners();
        gasContract = await ethers.deployContract("GasContract");
                });

                it("should add a new student", async function () {
                    await gasContract.addStudent(1, "Alice", 20, "Computer Science");
                    const student = await gasContract.getStudent(0);
                    
                    expect(student[0]).to.equal(1);
                    expect(student[1]).to.equal("Alice");
                    expect(student[2]).to.equal(20);
                    expect(student[3]).to.equal("Computer Science");
                });
            
                it("should edit an existing student", async function () {
                    await gasContract.addStudent(1, "Alice", 20, "Computer Science");
                    await gasContract.editStudent(0, 1, "Bob", 22, "Electrical Engineering");
                    const student = await gasContract.getStudent(0);
            
                    expect(student[0]).to.equal(1);
                    expect(student[1]).to.equal("Bob");
                    expect(student[2]).to.equal(22);
                    expect(student[3]).to.equal("Electrical Engineering");
                });
            
                it("should retrieve student information after editing", async function () {
                    await gasContract.addStudent(1, "Alice", 20, "Computer Science");
                    await gasContract.editStudent(0, 1, "Bob", 22, "Electrical Engineering");
                    const student = await gasContract.getStudent(0);
            
                    expect(student[0]).to.equal(1);
                    expect(student[1]).to.equal("Bob");
                    expect(student[2]).to.equal(22);
                    expect(student[3]).to.equal("Electrical Engineering");
                });
            
                it("should revert when editing a non-existing student", async function () {
                    // Attempting to edit a student at index 10, which doesn't exist
                    await expect(gasContract.editStudent(10, 2, "John", 25, "Physics")).to.be.revertedWith("Index out of bounds");
                });
            
                it("should revert when retrieving information of a non-existing student", async function () {
                    // Attempting to retrieve information of a student at index 10, which doesn't exist
                    await expect(gasContract.getStudent(10)).to.be.revertedWith("Index out of bounds");
                });
});


//********************optimize**************************
// describe("GasContract", function () {
//         let GasContract;
//         let gasContract;
    
//         it("deploying",async () => {
//             GasContract = await ethers.getSigners();
//             gasContract = await ethers.deployContract("GasContract");
//                     });
//                     it("should add a new student", async function () {
//                         await gasContract.addStudent(1, "Alice", 20, "Computer Science");
//                         await gasContract.addStudent(2, "Alena", 30, "Computer Science");

//                         const student = await gasContract.getStudent(1);
                        
//                         expect(student[0]).to.equal("Alice");
//                         expect(student[1]).to.equal(20);
//                         expect(student[2]).to.equal("Computer Science");
//                     });
                
//                     it("should edit an existing student", async function () {
//                         await gasContract.addStudent(1, "Alice", 20, "Computer Science");
//                         await gasContract.editStudent(1, "Bob", 22, "Electrical Engineering");
//                         const student = await gasContract.getStudent(1);
                
//                         expect(student[0]).to.equal("Bob");
//                         expect(student[1]).to.equal(22);
//                         expect(student[2]).to.equal("Electrical Engineering");
//                     });
                
//                     it("should retrieve student information", async function () {
//                         await gasContract.addStudent(1, "Alice", 20, "Computer Science");
//                         const student = await gasContract.getStudent(1);
                
//                         expect(student[0]).to.equal("Alice");
//                         expect(student[1]).to.equal(20);
//                         expect(student[2]).to.equal("Computer Science");
//                     });
                
//                     it("should revert when editing a non-existing student", async function () {
//                         // Attempting to edit a student that doesn't exist
//                         await expect(gasContract.editStudent(3, "John", 25, "Physics")).to.be.revertedWith("Student does not exist");
//                     });
                
//                     it("should revert when retrieving information of a non-existing student", async function () {
//                         // Attempting to retrieve information of a student that doesn't exist
//                         await expect(gasContract.getStudent(3)).to.be.revertedWith("Student does not exist");
//                     });
//                 });