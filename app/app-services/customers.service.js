
	angular
	.module("app")
	.service('CustomerService', 
		['$http','$stateParams',
		 function($http, $stateParams)
		 {
			console.log('Dashboard Controller Initialized...');
			
			  this.getCustomers = function(){
			  console.log('Inside Customers');
			  return $http.get('/api/customers');
		     }

			
			  this.getCustomer = function(query){
				return $http.get('/api/customers/'+query);
		  }

	//Get customer invoices on customer detail page
			this.getCustomerInvoices = function(query){
				
				return $http.get('/api/invoices/customer/'+query);
			}


			this.addCustomer = function(){
					return $http.post('/api/customers/', this.customer);
			}

			this.updateCustomer = function(customerId){
			return $http.put('/api/customers/'+customerId, this.customer);
//			window.location.href = '/#customers';
//		});
	}

			this.deleteCustomer = function(query){
			
			return $http.delete('/api/customers/'+query);
			window.location.href ='/#customers';
		
		}

}]);

