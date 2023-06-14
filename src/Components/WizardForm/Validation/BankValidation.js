
const BankValidation = (selectedData) => {

    const errors = {}

    const zipCodePattern  = /^\d{5}$/;
    const IBANPattern = /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/;
    console.log(selectedData.bankName)

    if(selectedData.bankName === "" ) {
        errors.bankName = "Bank Name is Required!";
    }else{
        errors.bankName = "";
    }

    if(selectedData.accountHolder === "" ) {
        errors.accountHolder = "Account holder is Required!";
    }else{
        errors.accountHolder = "";
    }

    if(selectedData.country === "" ) {
        errors.country = "Country is Required!";
    }else{
        errors.country = "";
    }

    if(selectedData.streetAdress === "" ) {
        errors.streetAdress = "Street address is Required!";
    }else{
        errors.streetAdress = "";
    }

    if(selectedData.postalCode === "" ) {
        errors.postalCode = "Postcode is Required!";
    }else if (!zipCodePattern.test(selectedData.postalCode)){
        errors.postalCode = "Postcode is Invalid!";
    }else{
        errors.postalCode = "";
    }

    if(selectedData.city === "" ) {
        errors.city = "City is Required!";
    }else{
        errors.city = "";
    }

    if(selectedData.IBAN === "" ) {
        errors.IBAN = "IBAN is Required!";
    }else if (!IBANPattern.test(selectedData.IBAN)){
        errors.IBAN = "IBAN is Invalid!";
    }else{
        errors.IBAN = "";
    }
    
    if(selectedData.SWIFT === "" ) {
        errors.SWIFT = "BIC / SWIFT is Required!";
    }else{
        errors.SWIFT = "";
    }
    
    if(selectedData.bankDetailsFile === ""){
        errors.bankDetailsFile = "Bank Statement is Required!";
    }else{
        errors.bankDetailsFile = "";
    }

    selectedData.bankDetailsFile.fileList?.map((file, index)=>{
        if(file.type !== "image/png" && file.type !== "application/pdf" && file.type !== "image/jpeg" && file.type !== "application/msword" ){
            errors.bankDetailsFile = "File extension is not supported!";
            // console.log(file.type)
        }else if(file.size >= 8000000){
            errors.bankDetailsFile = "File size exceeds the limit allowed size!";
        }else{
            errors.bankDetailsFile = "";
        }
    })
    


  return errors;
}
export default BankValidation;