model.Customer.password.scope = "publicOnServer";

model.Customer.events.restrict = function(e){
	
	return this.query('account == :$userName');//currentUser().name
	
}

model.Product.events.restrict = function(e){
	
	return this.query('Link_1.account == :$userName');//currentUser().name
	
}