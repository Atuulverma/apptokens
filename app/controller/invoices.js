angular
.module('app')
.controller('InvoiceController',['$state','InvoiceService', 
                                  function($state, InvoiceService ){
	
	
			this.getInvoices = function(){
			  InvoiceService.getInvoices().then(response=>this.invoices=response.data);
			}


			this.getInvoice = function(){
				InvoiceService.getInvoice($state.params.id).then(function(response){
					this.invoice= response.data;
					//Fill Select
					this.invoice.customer_id = response.data.customer._id;
					this.invoice.status = response.data.status;
				});
			}

			this.getCustomer = function(){
				InvoiceService.getCustomer($state.params.id).then(function(response){
					this.invoice=response.data;
				});
			}

		  this.getCustomers = function(){
		    InvoiceService.getCustomers().then(function(response){
		      this.customers = response.data;
		    });
		  }

		  this.addInvoice = function(){
		     InvoiceService.addInvoice(this.invoice).then(function(response){
		      window.location.href = '/#invoices';
		    });
		  }

			this.updateInvoice = function(){
		      InvoiceService.updateInvoice($state.params.id, this.invoice).then(function(response){
		      window.location.href = '/#invoices';
		    });
		  }

			this.deleteInvoice = function(){
		      InvoiceService.deleteInvoice($state.params.id).then(function(response){
		      window.location.href = '/#invoices';
		    });
		  }
	
}])






