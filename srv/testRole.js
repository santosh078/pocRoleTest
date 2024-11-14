const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
	const { Products } = this.entities;
	
	const service = await cds.connect.to('test');
	// this.on('READ', Products, request => {
	// 	console.log(`User details ${JSON.stringify(request._.req)}`);
	// 	return service.tx(request).run(request.query);
	// });
	this.on("READ",Products,async(request)=>{
const oResp= service.tx(request).run(request.query);
return oResp;
	});
	this.on('getEmpInfo', async (req, res) => {       

	// return	JSON.stringify({			
	// 		userInfo: req.user
	// 	  });

	return req.user;
       
    });
});