import React, { useEffect, useState } from 'react';

import SkeletonArticle from '../skeletons/SkeletonArticle';

function Articles(props) {



    const [articles,Setarticles]=useState(null);


    useEffect(()=>{
     setTimeout(async ()=>{
       const res=await fetch('https://jsonplaceholder.typicode.com/posts');
       const data=await res.json();
       Setarticles(data);


     },3000)

    },[])
        return (
        <div className="article">
            <h2>
                Articles
            </h2>

            
            {articles && articles.map((a)=>(
                <div key={a.id}>
                    <h3>
                        {a.title}
                    </h3>
                    <p>
                        {a.body}
                    </p>
                </div>


            ))}
            {!articles && [1,2,3,4,5].map((n)=>(

                <SkeletonArticle key={n} />
            ))}
        </div>
    );
}

export default Articles;