/*
declared all my variables, created elements that will be needed for this project, appended them to their parent element and
gave the class names or id's depending how the element will be used. 
*/ 
const contactList = document.getElementsByClassName("contact-item cf");    
const contactPerPage = 10;                                                
const ul = document.querySelector('ul');                                   
ul.setAttribute("id","names");                                             
const headerDiv = document.querySelector('.page-header.cf');               
const contactDiv = document.createElement('div');                                                            
headerDiv.appendChild(contactDiv);                                         
const input = document.createElement("input");                             
input.setAttribute("id","input")     
                                                                         
 const button = document.createElement('button');                           
                                           
contactDiv.appendChild(button);                                            
const pageDiv = document.querySelector('.page');                           
const div = document.createElement('div');                                 
div.className = 'pagination';                                              
pageDiv.appendChild(div);                                                  
                             
 

/*
The showPage function take care of displaying a set ammount of contacts per page. 

*/ 
const showPage = (list, page) => {
   const startIndex = (page * contactPerPage) - contactPerPage;            
   const endIndex = (page * contactPerPage) -1;                              
   contactList.display = 'none';                                               
   for(let i = 0; i < list.length; i ++) {                                    
      if(i >= startIndex && i <= endIndex) {                                  
         list[i].style.display = '';                                          
      } else {
        list[i].style.display = 'none';                                       
      }
   }
};

/*
This function will append all the page buttons according to how many contacts are on the list. 

*/ 
const appendPageLinks = (list) => {
   const neededPages = list.length / contactPerPage;                         
   const ul = document.createElement('ul');                                   
   div.appendChild(ul);                                                       
   
   for( let i = 0; i < neededPages; i ++ ) {                                  
      const pageNum = i + 1;                                                  
      const li = document.createElement('li');                                
      const a = document.createElement('a');                                  
      li.appendChild(a);                                                      
      a.setAttribute("href","#");                                             
      a.textContent = pageNum;                                                
      ul.appendChild(li);                                                                   
      const anchorTag = document.getElementsByTagName('a');                   
      anchorTag[0].className = "active";                                      
      
      for (let i = 0; i < anchorTag.length; i++){                             
         anchorTag[i].addEventListener('click', (e) => {                     
            const pageNum = e.target.textContent;                             
            
            for (let i = 0; i < anchorTag.length ; i++) {                      
               
               anchorTag[i].classList.remove("active");                       
            }
               e.target.classList.add("active");                              
            
               showPage(list, pageNum);                                      
            });                               
      }              
      
   }
   
}

//The showPage function is called and it takes the list of contacts as well as 1 so it will display the first page by default.
//The appendPageLinks is also called and also take the contactList as it's only argument.
showPage(contactList,1);          
appendPageLinks(contactList);    
