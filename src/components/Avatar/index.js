import { Image } from "@next";

const Avatar = (props) => (
  <Image src={require("images/avatar.png")} {...props} />
);

Avatar.defaultProps = {
  width: 100,
  height: 100,
  layout: "intrinsic",
};

export default Avatar;
