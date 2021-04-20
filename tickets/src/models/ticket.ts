import mongoose from 'mongoose';
import { Password } from '../services/password'

/*  
   Interface: Describing the properties that are
   required to create a new User
*/
interface TicketAttrs {
   title: string,
   price: number;
   userId: string;
}

/*
   Interface: Describing the properties that a User
   document has (If we want to have any new
   exta properties we can define them in this interface)
*/
interface TicketDoc extends mongoose.Document {
   title: string,
   price: number;
   userId: string;
}


/*
   Interface: Describing the properties that a User
   model has
*/

interface TicketModel extends mongoose.Model<TicketDoc> {
   build(attrs: TicketAttrs): TicketDoc;
}


const ticketSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      required: true
   },
   userId: {
      type: String,
      required: true
   }
},
   {
      // Customizing the JSON response
      toJSON: {
         transform(doc, ret) {
            ret.id = ret._id
            delete ret._id;
         }
      }
   }
);


ticketSchema.statics.build = (attrs: TicketAttrs) => {
   return new Ticket(attrs);
}


// Creating model
const User = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema);


export { Ticket };