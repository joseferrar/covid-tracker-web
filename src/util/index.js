import moment from "moment";

export const DateTime = (unixtime) => {
  const date = moment(unixtime).format("DD MMMM YYYY");
  return date;
};
