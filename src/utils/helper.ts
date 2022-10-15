import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const errorFormatter = (error: any) => {
  const message =
    error?.response?.data?.message ||
    error?.response?.data?.data?.message ||
    error?.message ||
    "Something went wrong";

  return message;
};
export function makeId(length: any) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function getDateWithFormat(date: Date) {
  return dayjs.utc(date).format("MMM DD, YYYY");
}

// const data = [
//   {
//     social_media: "tik-tok" || "insta" || "facebook",
//     media_type: "video",
//     owner: "Richardson",
//     createdAt: "XYZDATE",
//     brand_name: "Virla",
//     tags: ["Inspiration_IG", "May more"],
//     media: ["urls", "urls"],
//   },
// ];
