function myLogin(userName, password, isHashed)
{ 
	/*
	console.info(JSON.stringify({
		userName:userName, 
		password:password, 
		isHashed:isHashed}));
	 */
	 
    if(typeof ds !== 'undefined'){
        
	    var result = ds.Customer.myLogin({
			"name":userName, 
			"password":password
		})
    
    	if(result.success == true){

    		return { 
		        'ID':generateUUID(), 
		        'name':userName, 
		        'fullName':userName,
		        'belongsTo':["Admin"],
		        storage:{
		            login: new Date()
		        }
	    	}	
    	}
    
    }else{
	    //ds is not ready; let's use directory instead
    	return false;
    }
        
	return { error: 1024, errorMessage:"invalid login" };
}
