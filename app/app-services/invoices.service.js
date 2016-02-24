
	angular
	.module("app")
	.service('InvoiceService', 
		['$http','$stateParams',
		 function($http, $stateParams)
		 {
			console.log('Invoice Service Initialized...');
			
			  this.getInvoices = function(){
			   return $http.get('/api/invoices');
		     }

			
			  this.getInvoice = function(query){						
				return $http.get('/api/invoices/'+query);
			 }

			 this.getCustomer = function(query){
						return $http.get('/api/invoices/'+query);
				  }

				  this.getCustomers = function(){
				    return $http.get('/api/customers');
				  }

				  this.addInvoice = function(invoiceobj){
				     return $http.post('/api/invoices/', invoiceobj);
				  }

					this.updateInvoice = function(query, invoiceobj){
				    return $http.put('/api/invoices/'+query, invoiceobj);
				  }

					this.deleteInvoice = function(query){
				      return $http.delete('/api/invoices/'+query);
				  }

}]);
