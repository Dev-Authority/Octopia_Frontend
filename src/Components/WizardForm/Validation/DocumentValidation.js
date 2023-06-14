
const DocumentValidation = (selectedData) => {

    const errors = {}

    if(selectedData.bankDetailsFile === ""){
        errors.bankDetailsFile = "Bank Statement is Required!";
    }else{
        errors.bankDetailsFile = "";
    }

    if(selectedData.commercialRegisterFile === ""){
        errors.commercialRegisterFile = "Commercial Register is Required!";
    }else{
        errors.commercialRegisterFile = "";
    }

    selectedData.bankDetailsFile.fileList?.map((file, index)=>{
        if(file.type !== "image/png" && file.type !== "application/pdf" && file.type !== "image/jpeg" && file.type !== "application/msword" ){
            errors.bankDetailsFile = "File extension is not supported!";
            console.log(file.type)
        }else if(file.size >= 8000000){
            errors.bankDetailsFile = "File size exceeds the limit allowed size!";
        }else{
            errors.bankDetailsFile = "";
        }
    })

    selectedData.commercialRegisterFile.fileList?.map((file, index)=>{
        if(file.type !== "image/png" && file.type !== "application/pdf" && file.type !== "image/jpeg" && file.type !== "application/msword" ){
            errors.commercialRegisterFile = "File extension is not supported!";
            console.log(file.type)
        }else if(file.size >= 8000000){
            errors.commercialRegisterFile = "File size exceeds the limit allowed size!";
        }else{
            errors.commercialRegisterFile = "";
        }
    })
    


  return errors;
}
export default DocumentValidation;