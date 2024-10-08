import React from "react";
import Article from './Article'

function ArticleList({posts}){

const articleComp = posts.map((comp)=>{
    
    return <Article key={comp.id} title={comp.title} 
    date={comp.date} preview={comp.preview} />
})
    return(
    
        <main>
            
          {articleComp}
    
        </main>

 )

}
  

    


export default ArticleList