import mongoose from 'mongoose';
import { Password } from '../services/password'

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

// 
userSchema.pre('save', async function(done) {
   if(this.isModified('password')) {
      const hashed = await Password.toHash(this.get('password'));
      this.set('password', hashed)
   }
   done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
   return new User(attrs);
}


const User = mongoose.model<UserDoc, UserModel>('User', userSchema);



export { User };