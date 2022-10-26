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
                price:75, 

            },{
                id:'153',
                name:'Porção Tilápia', 
                price:65, 

            }
        ]
        },{ 
            id:'02',
            name:'Lanches',
            products:[{
                id:'001',
                name:'sala', 
            },{
                id:'002',
                name:'lula', 
            }
        ]
        },{ 
            id:'03',
            name:'Mais',
            products:[{
                id:'001',
                name:'peixe', 
            },{
                id:'002',
                name:'lula', 
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
                name:'peixe', 
            },{
                id:'002',
                name:'lula', 
            }]
            
        },{ 
            id:'05',
            name:'Alcoolicas',
            products:[{
                id:'001',
                name:'vodka', 
            },{
                id:'002',
                name:'lula', 
            }]
        },{ 
            id:'06',
            name:'Mais',
            products:[{
                id:'001',
                name:'limao', 
            },{
                id:'002',
                name:'lula', 
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
           
            console.log(tabContentMap )       
            document.getElementById(apiData.id.toString()).innerHTML+= ` 
               
                <div id="`+tabContentMap.id +`" class="tabcontent">  
                </div>
            `;
        var Contentsubs=document.getElementById(tabContentMap.id)
           
        tabContentMap.products.map((productsMap)=>{  
                console.log(document.getElementById(apiData.id.toString()))
                Contentsubs.innerHTML+= `  
                    <div class="produto">
                             <img src="assets/images/camarao-paulista.png" alt="" s></img>
                        <div class="prod-val">
                            <h3 class="title-prod">`+productsMap.name +`</h3> 
                            <span class="valor">`+productsMap.price +`</span>
                        </div>
                        <div class="quantidade">
                            <button>+</button>
                            <input type="text" placeholder="0">
                            <button>-</button>
                        </div>
                    </div> 
                    </div>
                `;
   
                }) 
        }) 
     }) 
 }
  
 categoriesContainer ? getApi(categoriesContainer) : console.log("..");
    



    