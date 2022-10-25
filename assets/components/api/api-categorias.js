data = [{ 
    id:'0',
    name:'Para Comer', 
        itens:[{ 
            id:'01',
            name:'Porções', 
            products:[{
                id:'001',
                name:'peixe', 
            },{
                id:'002',
                name:'lula', 
            }
        ]
        },{ 
            id:'02',
            name:'Lanches',
            products:[{
                id:'001',
                name:'peixe', 
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
                name:'peixe', 
            },{
                id:'002',
                name:'lula', 
            }]
        },{ 
            id:'06',
            name:'Mais',
            products:[{
                id:'001',
                name:'peixe', 
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
            <div id="`+apiData.id +`" class="tabcontent">  
            </div>
        `;

        apiData.itens.map((itensMap)=>{   

            btnsItens=`
            <button class="tablinks" onclick="openCity(event, '`+itensMap.id +`', '`+apiData.id +`')">
                <i class="fa-solid fa-burger"></i> `+itensMap.name +`
            </button>
            `;
            document.getElementById(apiData.id.toString()).innerHTML += `  
                <div class="tab sub">
                `+btnsItens +`
                </div>
            `;
 
            console.log(btnsItens )

             
             itensMap.products.map((productsMap)=>{  
            
            //  container.innerHTML += ` </br>`+productsMap.name +` `;

             }) 
        }) 

     }) 
 }
  
 categoriesContainer ? getApi(categoriesContainer) : console.log("..");
    



    