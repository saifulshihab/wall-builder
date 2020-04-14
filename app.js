const build_btn = document.getElementById("build-btn");
const wall = document.getElementById("brick_wrapper");
build_btn.addEventListener('click', build_wall);

function build_wall(){    
    for(let i=0; i < 2; i++){
        let l = (i%2) === 0 ? 14 : 15;
        if(l==14){
            for(let j=0; j < l; j++){            
                b = document.createElement("div");
                b.setAttribute("class", "brick");    
                wall.appendChild(b);
            }                            
        }else{
            for(let j=0; j < l; j++){
                if(j==(l-l) || j==(l-1)){
                    bs = document.createElement("div");
                    bs.setAttribute("class", "brick-half");    
                    wall.appendChild(bs);    
                }else{
                    b = document.createElement("div");
                    b.setAttribute("class", "brick");    
                    wall.appendChild(b);
                }                
            }                
        }        
        b = document.createElement("br");
        wall.appendChild(b);
    }    
}
