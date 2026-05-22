import mongoose from "mongoose";

const appoitmentSchema = new mongoose.Schema({
    userId: {type: String, required: true },
    docId: {type: String, required: true },
    slotDate: {type: String, required: true },
    SlotTime: {type: String, required: true },
    UserData: {type: Object, required: true },
    docData: {type: Object, required: true },
    amount: {type: Number, required: true },
    date: {type: Number, required: true },
    cancelled: {type: Boolean, required: false },
    payment: {type: Boolean, required: false },
    isCompleted: {type: Boolean, required: false },
})

const appoitmentModel = mongoose.models.appoitment || mongoose.model('appoitment',appoitmentSchema)
export default appoitmentModel