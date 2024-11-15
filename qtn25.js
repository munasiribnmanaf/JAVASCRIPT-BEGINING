var a=""
for(m=1;m<7;m++){ 
     a+="$ ";
     console.log(a)
    
}
  for( i=6;i>=1;i--){
     a="";
  
    for( m=i;m>=1;m--){
      a+="* ";
    }
    console.log(a); 
    
    }

for(i=1;i<=5;i++){
  a=""
  for(k=1;k<=5;k++){
    if(i==1 && k%2==1 ||i==2 && k%2==0||i==3&&k%2==1||i==4&&k%2==0||i==5&&k%2==1){   
      a+='* '
    }
    else{
      a+="  "
    }
  }console.log(a);
  
}
for(i=1;i<=5;i++){
  a=""
  for(k=1;k<=5;k++){
    if( i!=1 &&i!=5&&k!=1&&k!=5){  
      a+='* '
    }

    else{
      a+="  "
    }
  
  }console.log(a);
  
}