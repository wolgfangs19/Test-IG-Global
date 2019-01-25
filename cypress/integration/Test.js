describe('Test Arzion', function() {
  it('Loads the page', function() {
    cy.visit('https://www.iglobal.co/argentina')
    cy.get('title').should('contain','iGlobal es un directorio online de negocios y profesionales de 60 paises del mundo')
  })
  it('Clicks on a button', function() {
	cy.get('a[id="ig-logink"]').should('exist')
		.click()
  })
it('type wrong login', function(){
	cy.get('input[name="email"]').type('wemp193@hotmail.com')
	cy.get('input[name="password"]').type('clave123')
	cy.get('button[id="btn-login"]').should('exist')
		.click()
	cy.get('div.uk-alert > ul >li').should('contain','Correo electrónico inexistente')
	
	cy.get('input[name="email"]').clear() 	
	cy.get('input[name="password"]').clear() 
	})




it('type correct login', function(){
	cy.get('input[name="email"]').type('daniel.magnotta@arzion.com')
	cy.get('input[name="password"]').type('arzion123')
	cy.get('button[id="btn-login"]').should('exist')
		.click()
	cy.get('span[id="ig-username-loged"]').should('contain','ARZION TEST QA')
		
	})

it('search pizza', function(){
	cy.get('input[id="what"]').type('pizza')
	cy.get('svg[id="ig-search"]').should('exist')
		.click()

cy.get('input[id="what"]').clear() 
	
		})


it('cont pizza', function(){
	var counter = new Array();
	let count = 0 ;
	cy.get('div.result_link_col').each(function(pizza,) {
		counter.push(pizza)
	})
	cy.wait(3000)

	counter.map(function(index, elem) {
		count = count + 1;
	})
	cy.log(Object.keys(counter).length)
	cy.log(count)
	console.log(Object.keys(counter).length)
	console.log(count)

})

it('search pesca', function(){
	cy.get('input[id="what"]').type('pesca')
	cy.get('svg[id="ig-search"]').should('exist')
		.click()

cy.get('input[id="what"]').clear() 

cy.get('span[title="Anuncio certificado"').should('exist').then(($certificado)=>{

		certificado.map(function(index, elem) {
			count = count + 1;
		var count = 0
	})

	})


})

it('search no result', function(){
	cy.get('input[id="what"]').type('hallaca')
	cy.get('svg[id="ig-search"]').should('exist')
		.click()
cy.get('span[class="uk-icon uk-icon-map-marker"]').should('not.exist').then(($icono)=>{
	if ($icono == null) {
		console.log('not result found for "hallaca"')
	}
	
})

	
})





})