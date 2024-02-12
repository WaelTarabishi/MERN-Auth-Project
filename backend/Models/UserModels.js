import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      reqired: true,
    },
    email: {
      type: String,
      reqired: true,
      uniqure: true,
    },
    password: {
      type: String,
      reqired: true,
    },
  },
  { timeStamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
userSchema.methods.matchPasswords = async function (enterdPassword) {
  return await bcrypt.compare(enterdPassword, this.password);
};
const User = mongoose.model("User", userSchema);
export default User;
