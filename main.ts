import { User, ProfilePicture } from "npm:@buf/wcygan_flock.bufbuild_es@2.2.5-20250129144759-482c937991e5.1/profile/v1/profile_pb.d.ts";
import { UserId } from "npm:@buf/wcygan_flock.bufbuild_es@2.2.5-20250129144759-482c937991e5.1/common/v1/common_pb.d.ts";

console.log("Hello, Deno!");

// Create a valid UserId
const userId: UserId = {
  $typeName: "common.v1.UserId",
  value: "12345",
};

// Create a valid ProfilePicture
const profilePicture: ProfilePicture = {
  $typeName: "profile.v1.ProfilePicture",
  picture: { case: "hexColor", value: "#FF5733" },
};

// Create a new User
const newUser: User = {
  $typeName: "profile.v1.User",
  id: userId,
  username: "new_user",
  picture: profilePicture,
};

console.log(newUser);