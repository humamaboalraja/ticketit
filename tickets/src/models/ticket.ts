import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';


/*  
   Interface: Describing the properties that are
   required to create a new User
*/
interface TicketAttrs {
   title: string;
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
   version: number;
   orderId?: string;
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
   },
   orderId: {
     type: String,
   },
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


ticketSchema.set('versionKey', 'version');
ticketSchema.plugin(updateIfCurrentPlugin);


ticketSchema.statics.build = (attrs: TicketAttrs) => {
   return new Ticket(attrs);
}


// Creating model
const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema);


export { Ticket };