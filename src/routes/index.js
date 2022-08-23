import { Router } from "express";
import MentorController from "../controllers/mentorController";
import ApplicationController from "../controllers/applicationController";
import Validator from "../middlewares/validator";
import DataChecker from "../middlewares/dataChecker";
import VerifyAccess from "../middlewares/verifyAccess";
import VerifyToken from "../middlewares/verifyToken";
import CourseController from "../controllers/courseController";
import AttendenceController from "../controllers/attendenceController";

const route = Router();

route.post("/mentor/register",
Validator.newAccountRules(),
Validator.validateInput,
DataChecker.validateEmailDuplication,
MentorController.createAccount);
route.get("/getMentors",MentorController.getAllMentor);
route.get("/mentor/:id", MentorController.getOneById);
route.patch("/mentorUpdate/:id" , MentorController.updateMentor);



//Application Routes


route.post("/apply" ,ApplicationController.submitApplication);
route.get("/getApplication",ApplicationController.getAllApplication);


//Course Routes


route.post("/create/course" ,CourseController.createCourse);
route.get("/getAll/course",CourseController.getAllCourses);

// Attendence routes

route.post("/create/attendence" ,AttendenceController.createAttendence);
route.get("/getAll/attendence" ,AttendenceController.getAllAttendence);
export default route


