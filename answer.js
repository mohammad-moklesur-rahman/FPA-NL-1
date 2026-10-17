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