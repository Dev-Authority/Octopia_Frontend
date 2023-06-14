
const DocumentValidation = (selectedData) => {

    const errors = {}


    if(selectedData.storeLogoFile === ""){
        errors.storeLogoFile = "Store Logo is Required!";
    }else{
        errors.storeLogoFile = "";
    }

    if(selectedData.storeBannerFile === ""){
        errors.storeBannerFile = "Store Banner is Required!";
    }else{
        errors.storeBannerFile = "";
    }




    selectedData.storeLogoFile.fileList?.map((file, index)=>{
        if(file.type !== "image/png" && file.type !== "image/jpeg"){
            errors.storeLogoFile = "File extension is not supported!";
            console.log(file.type)
        }else if(file.size >= 8000000){
            errors.storeLogoFile = "File size exceeds the limit allowed size!";
        }else{
            errors.storeLogoFile = "";
        }
    })

    selectedData.storeBannerFile.fileList?.map((file, index)=>{
        if(file.type !== "image/png" && file.type !== "image/jpeg"){
            errors.storeBannerFile = "File extension is not supported!";
            console.log(file.type)
        }else if(file.size >= 8000000){
            errors.storeBannerFile = "File size exceeds the limit allowed size!";
        }else{
            errors.storeBannerFile = "";
        }
    })
    


  return errors;
}
export default DocumentValidation;