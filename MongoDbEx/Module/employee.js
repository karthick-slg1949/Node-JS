import mongoose from "mongoose";

let emp_Schema=new mongoose.Schema({
    eid:{type:Number,require:true},
    ename:{type:String,require:true},
    esal:{type:Number,require:true}
})
let Employee=mongoose.model("employees",emp_Schema)
export default Employee;