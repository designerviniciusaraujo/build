data = [{ 
    id:'0',
    name:'Para Comer', 
    key:'Comer', 
        itens:[{ 
            id:'01',
            name:'Porções', 
            products:[{
                id:'150',
                name:'Porção Camarão Paulista', 
                price:90, 
            },{
                id:'151',
                name:'Porção Camarão Dorê', 
                price:75, 

                
            },{
                id:'152',
                name:'Porção Lula Dorê', 
                price:80, 

            },{
                id:'153',
                name:'Porção Peixe Tilápia', 
                price:65, 

            },{
                id:'154',
                name:'Porção Peixe Cação', 
                price:65, 

            },{
                id:'155',
                name:'Porção Peixe Pescada', 
                price:65, 

            },{
                id:'156',
                name:'Porção Peixe Merluza', 
                price:65, 

            },{
                id:'158',
                name:'Porção Peixe Porquinho', 
                price:65, 

            },{
                id:'159',
                name:'Fritas', 
                price:35, 

            },{
                id:'160',
                name:'Fritas com Queijo', 
                price:40, 

            },{
                id:'161',
                name:'Porção Mandioca', 
                price:35, 

            },{
                id:'162',
                name:'Porção Mandioca com Queijo', 
                price:40, 

            },{
                id:'164',
                name:'Porção Calabresa', 
                price:50, 

            },{
                id:'171',
                name:'Molho Extra', 
                price:3, 

            },{
                id:'172',
                name:'Pão Extra', 
                price:3, 

            }
        ]
        },{ 
            id:'02',
            name:'Lanches',
            products:[{
                id:'112',
                name:'Hot Dog', 
                price:18, 
            },{
                id:'097',
                name:'X Salada', 
                price:25, 
            },{
                id:'110',
                name:'X Egg', 
                price:25, 
            },{
                id:'111',
                name:'X Burguer', 
                price:25, 
            }
        ]
        },{ 
            id:'03',
            name:'Pasteis',
            products:[{
                id:'090',
                name:'Pastel Carne ', 
                price:13,
            },{
                id:'091',
                name:'Pastel Queijo', 
                price:12,
            },{
                id:'092',
                name:'Pastel Bauru', 
                price:12,
            },{
                id:'093',
                name:'Pastel Calabresa', 
                price:12,
            },{
                id:'094',
                name:'Pastel Frango', 
                price:12,
            },{
                id:'095',
                name:'Pastel Pizza', 
                price:12,
            },{
                id:'096',
                name:'Pastel Brócolis', 
                price:12,
            },{
                id:'098',
                name:'Pastel Carne com Queijo', 
                price:15,
            },{
                id:'014',
                name:'Pastel Brócolis com Queijo', 
                price:12,
            },{
                id:'100',
                name:'Frango com Catupiry', 
                price:14,
            },{
                id:'101',
                name:'Pastel Palmito', 
                price:13,
            },{
                id:'101',
                name:'Pastel Camarão', 
                price:16,
            }
        ]
        }

        ]
    },{ 
    id:'1',
    name:'Para Beber', 
    key:'Beber',

        itens:[{ 
            id:'04',
            name:'Bebidas', 
            products:[{
                id:'001',
                name:'Água com Gás', 
                price:5, 
            },{
                id:'002',
                name:'Água sem Gás', 
                price:4, 
            },{
                id:'003',
                name:'H20 Limão', 
                price:7, 
            },{
                id:'005',
                name:'Refrigerante lata', 
                price:6, 
            },{
                id:'002',
                name:'Refrigerante Zero lata ', 
                price:7, 
            },{
                id:'007',
                name:'Sweppes', 
                price:7, 
            },{
                id:'009',
                name:'Copo com Gelo', 
                price:3, 
            }]
            
        },{ 
            id:'05',
            name:'Alcoolicas',
            products:[{
                id:'130',
                name:'Cerveja Pilsen Lata', 
                price:6, 
            },{
                id:'131',
                name:'Cerveja Malte Lata', 
                price:7, 

            },{
                id:'132',
                name:'Cerveja Haineken Lata', 
                price:10, 

            },{
                id:'133',
                name:'Cerveja Haineken Long Neck', 
                price:12, 

            },{
                id:'134',
                name:'Cerveja Stella Long Neck', 
                price:10, 

            },{
                id:'135',
                name:'Cerveja Haineken sem alcool Long Neck ', 
                price:10, 

            },{
                id:'136',
                name:'Cerveja Haineken sem alcool Lata', 
                price:10, 

            },{
                id:'140',
                name:'Caipirinha Pinga', 
                price:20, 

            },{
                id:'141',
                name:'Caipirinha Vodka Orloff', 
                price:23, 

            },{
                id:'142',
                name:'Caipirinha Vodka Smirnoff', 
                price:10, 

            },{
                id:'143',
                name:'Caipirinha Rum', 
                price:25, 

            },{
                id:'145',
                name:'Caipirinha Cachaça artesanal', 
                price:23, 

            },{
                id:'142',
                name:'Caipirinha Vodka Smirnoff', 
                price:10, 

            }]
        },{ 
            id:'06',
            name:'Mais',
            products:[{
                id:'001',
                name:'limao', 
                price:75, 

            },{
                id:'002',
                name:'lula', 
                price:75, 

            }]
        }
    
        ]
    }


]
var apiContainer=document.getElementById('api') 
var categoriesContainer=document.getElementById('categories') 



 getApi=(container)=>{
    container.innerHTML =` <div class="tab"> </div>`;
    data.map((apiData)=>{ 
         
        container.childNodes[1].innerHTML += ` 

            <button class="tablinks" onclick="openCity(event, '`+apiData.id +`')">
                <i class="fa-solid fa-burger"></i> `+apiData.name +`
            </button>
          
        `;
        container.innerHTML += ` 

            <div id="`+apiData.id +`" class="tabcontent">  
            </div>
      
        `; 
        document.getElementById(apiData.id.toString()) .innerHTML+= `  
        <div class="tab sub" id="`+apiData.key +`"  >
        
        </div>
          `; 
       
        var subs=document.getElementById(apiData.key)
       
        apiData.itens.map((itensMap)=>{        
            subs.innerHTML+= ` 
                 <button class="tablinks" onclick="openCity(event, '`+itensMap.id +`', '`+apiData.id +`')">`+itensMap.name +`</button> 
            `;
           
          
        }) 
        apiData.itens.map((tabContentMap)=>{ 
           
           
            document.getElementById(apiData.id.toString()).innerHTML+= ` 
               
                <div id="`+tabContentMap.id +`" class="tabcontent">  
                </div>
            `;
            var Contentsubs=document.getElementById(tabContentMap.id)
           
            tabContentMap.products.map((productsMap)=>{  
                    Contentsubs.innerHTML+= `  
                        <div class="produto">
                                <img src="assets/images/camarao-paulista.png" alt="" s></img>
                            <div class="prod-val">
                                <h3 class="title-prod">`+productsMap.name +`</h3> 
                                <span class="valor">`+productsMap.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})+`</span>
                            </div>
                            <div class="quantidade">
                                <button>+</button>
                                <input type="text" placeholder="0">
                                <button>-</button>
                            </div>
                        </div> 
                        </div>
                    `;


                if(productsMap.price==undefined){
                    console.log(productsMap )

                }
   
                }) 
        }) 
     }) 
 }
  
 categoriesContainer ? getApi(categoriesContainer) : console.log("..");
    



    