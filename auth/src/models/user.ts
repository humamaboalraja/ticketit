import mongoose from 'mongoose';


/*  
   Interface: Describing the properties that are
   required to create a new User
*/
interface UserAttrs { 
   email: string,
   password: string;
}

/*
   Interface: Describing the properties that a User
   model has
*/

interface UserModel extends mongoose.Model<UserDoc> {
   build(attrs: UserAttrs): UserDoc;
}

/*
   Interface: Describing the properties that a User
   document has (If we want to have any new
   exta properties we can define them in this interface)
*/
interface UserDoc extends mongoose.Document {
   email: string,
   password: string,
}


const userSchema = new mongoose.Schema({
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   }
});

userSchema.statics.build = (attrs: UserAttrs) => {
   return new User(attrs);
}


const User = mongoose.model<UserDoc, UserModel>('User', userSchema);



export { User, buildUser };