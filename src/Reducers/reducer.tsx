import InitialData from "../InitialData";

const userReducer = (currData = InitialData, action: any) => {
  console.log(InitialData.userInformation);
  console.log("current value", currData);
  switch (action.type) {
    case "USER": {
      return {
        ...currData,

        userInformation: [...currData.userInformation, action.payload],
      };
    }
  }
  // console.log("r", currData);
  return currData;
};

export default userReducer;
// return {
//   ...currData,
//   InitialData: {
//     userInformation: [...currData.userInformation, action.payload],
//   },
