import mongoose, { Document, Schema } from 'mongoose';

export interface IContract extends Document {
  title: string;
  description: string;
  budget: number;
  deadline: Date;
  status: 'Open' | 'In Progress' | 'Completed';
  createdBy: mongoose.Types.ObjectId;
  applicants: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const ContractSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Please provide a contract title'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a contract description'],
    maxlength: [1000, 'Description cannot be more than 1000 characters'],
  },
  budget: {
    type: Number,
    required: [true, 'Please provide a budget'],
    min: [0, 'Budget must be a positive number'],
  },
  deadline: {
    type: Date,
    required: [true, 'Please provide a deadline'],
    validate: {
      validator: function(value: Date) {
        return value > new Date();
      },
      message: 'Deadline must be in the future',
    },
  },
  status: {
    type: String,
    enum: ['Open', 'In Progress', 'Completed'],
    default: 'Open',
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  applicants: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
}, {
  timestamps: true,
});

export default mongoose.models.Contract || mongoose.model<IContract>('Contract', ContractSchema);