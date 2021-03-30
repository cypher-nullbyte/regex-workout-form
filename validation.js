// validation script here

const inputs=document.querySelectorAll('input');

const patterns={
    telephone:/^\d{11}$/
};
// validation function
function validate(field,regex){
    if(regex.test(field.value))
    {
        field.clasName='valid';
    }
    else
    {
        field.clasName="invalid"
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
        // console.log(e.target.value);
        // console.log(e.target.attributes.name.value);
        // validate(e.target,patterns['telephone']);
        validate(e.target,patterns[e.target.attributes.name.value]);
    });
}); 