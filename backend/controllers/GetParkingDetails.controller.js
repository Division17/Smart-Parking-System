import { ParkingDetails } from '../models/ParkingDetail.model.js'

const ParkingLotDetails = async(req,res)=>{

    try {
        
       const data = await ParkingDetails.find({})
       res.status(200).json({
        message:"Data Found",
        success: true,
        parkingLotDetails: data
       })

    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error",
            sucess: false
        })
    }

}

export default ParkingLotDetails;