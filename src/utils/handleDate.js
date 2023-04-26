const handleDate = (date) => {
  //format date for date object
  const formattedDate = date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3");
  //create new date object to remove time from date
  const newDate = new Date(formattedDate).toLocaleDateString("en-US");
  return newDate;
};

export default handleDate;
