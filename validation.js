// validation script here

const inputs=document.querySelectorAll('input');

const patterns={
    telephone:/^\d{11}$/,
    username:/^[0-9a-z]{5,12}$/i,
    password:/^[\da-z@_\-]{8,20}$/i,
    slug:/^[a-z\d\-]{8,20}$/,
    email:/^([a-z\d\-\.]+)@([a-z\d\-]+)\.([a-z]{2,8})((\.[a-z]{2,8}){1,2})?$/
};
// validation function
function validate(field,regex){
    field.clasName=regex.test(field.value)?"valid":"invalid";
    console.log(field.clasName);
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
        // console.log(e.target.value);
        // console.log(e.target.attributes.name.value);
        // validate(e.target,patterns['telephone']);
        validate(e.target,patterns[e.target.attributes.name.value]);
    });
}); 