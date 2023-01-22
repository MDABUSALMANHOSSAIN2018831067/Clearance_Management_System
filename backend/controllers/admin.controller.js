const db = require("../models/project452.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const postSchoolOfDepartment = (req, res) => {
    let { school_id, school_name } = req.body;
    var query = `insert into tbl_school values(${school_id}, "${school_name}")`;

    db.query(query, (err, result) => {
        if (!err) {
            res.status(200).json({
                "message": "School of Department create successful",
                result
            })
        }
        else {
            res.status(400).json({
                "message": "School of Department create failed",
                err
            })
        }
    })
}

const postCreateDepartment = (req, res) => {

    var { dept_id, dept_name, school_id } = req.body;

    console.log(dept_id, dept_name);

    var query = `insert into tbl_department values(${dept_id}, "${dept_name}", ${school_id})`;

    console.log(query);

    db.query(query, (err, result) => {
        if (!err) {
            res.status(200).json({
                "message": "Department create successful",
                result
            })
        }
        else {
            res.status(400).json({
                "message": "Department create failed",
                err
            })
        }
    })
}

const postStudentDetails = (req, res) => {

    var { reg_no, std_name, dept_id, std_email, std_phone, std_address, std_dateOfBirth } = req.body;

    var query = "insert into tbl_student(reg_no, std_name, dept_id, std_email, std_phone, std_address, std_dateOfBirth) values(?, ?, ?, ?, ?, ?, ?)";

    db.query(query, [reg_no, std_name, dept_id, std_email, std_phone, std_address, std_dateOfBirth], (err, result) => {
        if (!err) {
            res.status(200).json({
                "message": "Student info added successfully",
                result
            })
        }
        else {
            res.status(400).json({
                "message": "Student info add failed",
                err
            })
        }
    })
}

const postTeacherDetails = (req, res) => {

    var { teacher_id, teacher_name, dept_id, teacher_email, teacher_phone, designation } = req.body;

    var query = "insert into tbl_teacher(teacher_id, teacher_name, dept_id, teacher_email, teacher_phone, designation) values(?, ?, ?, ?, ?, ?)";

    db.query(query, [teacher_id, teacher_name, dept_id, teacher_email, teacher_phone, designation], (err, result) => {
        if (!err) {
            res.status(200).json({
                "message": "Teacher info added successfully",
                result
            })
        }
        else {
            res.status(400).json({
                "message": "Teacher info add failed",
                err
            })
        }
    })
}

module.exports = {
    postSchoolOfDepartment,
    postCreateDepartment,
    postStudentDetails,
    postTeacherDetails
}