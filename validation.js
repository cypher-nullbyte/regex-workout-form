// validation script here

const inputs=document.querySelectorAll('input');

const patterns={
    telephone:/^[1-9]\d{9}$/,
    username:/^[0-9a-z]{5,12}$/i,
    password:/^[\da-z@_\-]{8,20}$/i,
    slug:/^[a-z\d\-]{8,20}$/,
    email:/^([a-z\d\-\.]+)@([a-z\d\-]+)\.([a-z]{2,8})((\.[a-z]{2,8}){1,2})?$/
};
// validation function
function validate(field,regex){
    field.className=regex.test(field.value)?"valid":"invalid";
    // console.log(field.className);
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
        // console.log(e.target.value);
        // console.log(e.target.attributes.name.value);
        // validate(e.target,patterns['telephone']);
        validate(e.target,patterns[e.target.attributes.name.value]);
    });
}); 