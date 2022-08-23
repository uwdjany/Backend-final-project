import AttendenceModel from "../models/attendenceModel";


class AttendenceService{

    // Create Attendence

    static async createAttendence(req){
        const Attendence = await AttendenceModel.create(req.body)
        return Attendence;
    }

    //Delete Attendence
static async deleteAttendence(req){
    const Attendence = await AttendenceModel.deleteOne({_id:req.params.id});
    return Attendence


}

//Get All Attendence

static async getAllAttendence(req){
    const Attendence = await AttendenceModel.find();
    return Attendence;

}
}

export default AttendenceService;