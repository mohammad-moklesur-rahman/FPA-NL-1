// * Question No: 1 - Value Detective

const describeValue = (v) => {
if(!!v){
    return `${typeof v} | truthy`
}else{
    return `${typeof v} | falsy`
}
}
const result = describeValue("hello");