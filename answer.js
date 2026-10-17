// * Question No: 1 - Value Detective

const describeValue = (v) => {
if(!!v){
    return `${typeof v} | truthy`
}else{
    return `${typeof v} | falsy`
}
}
const result = describeValue("hello");


// * Question No: 2 - Bangladesh Weekend Machine

const getDayType = (v) => {
    const lowerCaseV = v.toLowerCase();
    switch (lowerCaseV){
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}
const result2 = getDayType("Friday");


// * Question No: 3 - Username Gatekeeper

const validateUsername = (v) => {
    const value = v.toLowerCase();
    const spaces = value.split(" ").length - 1;
    if(value.length < 4){
        return "Too Short";
    }else if(spaces > 0){
        return "No Space Allowed";
    }else if(value.includes("admin")){
        return "Reserved Word";
    }else{
        return "Available";
    }
}
const result3 = validateUsername("rahim123");


// * Question No: 4 - Dhaka CNG Fare Meter

const getCngFare = (distance, isNight = false, waitingMinutes = 0) => {
    let extraDistance = distance - 2;
    if(distance <= 2 && isNight === false && waitingMinutes === 0){
        return 50;
    }else if((distance > 2 || waitingMinutes > 0) && isNight === false){
        return 50 + (extraDistance * 15) + (waitingMinutes * 2);
    }else if(isNight === true){
        let total = 50 + (extraDistance * 15) + (waitingMinutes * 2);
        let persent = (total * 20) / 100;
        return total + persent;
    }
}
const result4 = getCngFare(2);