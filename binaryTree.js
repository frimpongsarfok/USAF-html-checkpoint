var BinarySearchTree = function(value) {
    
  //TODO: IMPLEMENT THE ABOVE METHODS ON THE BST CLASS
  let property={};
  //INSERT
  property.insert=(value)=>{
      //property.logValue.push(value);
       let treeInsert=(prop,val)=>{
            if(!prop.value){
               
                  prop.value=val; 
                  prop.right={value:0};
                  prop.left={value:0};
                     
            }else if(val>prop.value){                      
                    treeInsert(prop.right,val);   
                     
            }else if(val<prop.value){
                treeInsert(prop.left,val); 
            }   
        }
       
        treeInsert(property,value);
      
  };
  property.contains=(value)=>{
      let search=(prop,val)=>{
          if(val===prop.value){
              return true;
          }else if(val<prop.value && prop.left){
                return search(prop.left,val);
          }else if(val>prop.value && prop.right){
                return search(prop.right,val);
          }else{
              return false;
          }
         
      }
      return search(property,value);
    
  }
  property.depthFirstLog=(callback)=>{
        let logArray=[];
        let log=(prop)=>{
            if(prop.value){
                
                logArray.push(prop.value);
            }
            if(prop.right.value && prop.right){
              log(prop.right);
            }if(prop.left.value && prop.left){
                log(prop.left);
            }

            
        }
        log(property);
      return   callback(logArray);
  };
  property.insert(value);
  return property;    
};
let bt=BinarySearchTree(5);
 bt.insert(2);
 bt.insert(3);
bt.insert(7);
 bt.insert(6);
console.log(bt.left.right.value);
console.log(bt.contains(2));

function prints(val){
    console.log(val);
}
bt.depthFirstLog(prints);

