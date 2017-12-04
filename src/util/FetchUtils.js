// import request from 'request';

export default{
    fetchPosts:(url,params) =>{
        
        const options = {
            method:'POST',
            mode:'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(params)
        };
        return fetch(url,options);
    
    },


    fetchPost:(url,params) =>{

        const token=window.sessionStorage.getItem('token');
        const options = {
            method:'POST',
            mode:'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'token':token
            },
            body:JSON.stringify(params)
        };
        return fetch(url,options);
    
    },
    fetchGet:(url,params) =>{

        const token=window.sessionStorage.getItem('token');
        const options = {
            method:'GET',
            mode:'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'token':token
            }
        };
        if(params){

            let p = '';
            for(let key in params){

                p+=key+'='+params[key]+'&';
            
            }
            url = url+'?'+p;
        
        }
        return fetch(url,options);
    
    },
    fetchPut:(url,params) =>{

        const token=window.sessionStorage.getItem('token');
        
        return new Promise((resolve, reject) => {

            const xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.onreadystatechange = function() {

                if (xhr.readyState === 4) {

                    if (xhr.status >= 200 && xhr.status < 300) {

                        var response;
                        try {

                            response = JSON.parse(xhr.responseText);
              
                        } catch (e) {

                            reject(e);
              
                        }
                        if (response) {

                            resolve(response, xhr.status, xhr);
              
                        }
            
                    } else {

                        reject(xhr);
            
                    }
          
                }
        
            };
            xhr.open('PUT', url);
            xhr.setRequestHeader('content-type', 'application/json',token);
            let data = null ;
            if(params){
               
                data = JSON.stringify(params);
              
            }
                
            xhr.send(data);
        
        });
    
    },
    fetchDelete:(url,params) =>{

        const token=window.sessionStorage.getItem('token');

        return new Promise((resolve, reject) => {

            const xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.onreadystatechange = function() {

                if (xhr.readyState === 4) {

                    if (xhr.status >= 200 && xhr.status < 300) {

                        var response;
                        try {

                            response = JSON.parse(xhr.responseText);
              
                        } catch (e) {

                            reject(e);
              
                        }
                        if (response) {

                            resolve(response, xhr.status, xhr);
              
                        }
            
                    } else {

                        reject(xhr);
            
                    }
          
                }
        
            };
            xhr.open('DELETE', url);
            xhr.setRequestHeader('content-type', 'application/json',token);
            let data = null ;
            if(params){
               
                data = JSON.stringify(params);
              
            }
                
            xhr.send(data);
            
        });
    
    }
};
