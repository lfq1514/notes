const FormField=function (type,text){
    this.type=type
    this.text=text
}
const FormFieldDec=function(formField){
    this.formField=formField
}

const MaxlengthFormField=function (formfield,maxLength){
    FormFieldDec.call(this,formfield)
    this.formField.maxLength=maxLength
    return this.formField
}

let formField=new FormField('search','hello world')

formField=new MaxlengthFormField(formField,255)
console.log('formField',formField)






