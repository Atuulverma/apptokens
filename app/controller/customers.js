angular
.module('app')
.controller('CustomerController',['$state','CustomerService', 
                                  function($state, CustomerService ){
		
		this.getCustomer = function() {		
			CustomerService.getCustomer($state.params.id)
			.then(response=>this.customer = response.data);
		}
		this.getCustomers = function(){
			CustomerService.getCustomers()
			.then(response=>this.customers = response.data);
		}
	
		this.getCustomerInvoices = function(){
			CustomerService.getCustomerInvoices($state.params.id)		
			.then(response=>this.customer_invoices = response.data);
		}
}])
