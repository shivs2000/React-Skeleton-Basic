import React,{useState,useEffect} from 'react';
import SkeletonProfile from '../skeletons/SkeletonProfile';

function User(props) {
    const [profile,Setprofile]=useState(null);


    useEffect(()=>{
    
    setTimeout(async ()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data= await res.json();
    Setprofile(data);


    },3000)

    },[])
    return (
        <div className="user">
            <h2>
             User Details
            </h2>

            { profile && (
               <div>
                   <h3>{profile.name}</h3>
                   <p>{profile.email}</p>
                   <a href={profile.website}>{profile.website}</a>
                </div>


            )}

            {!profile && (<SkeletonProfile  />)}
        </div>
    );
}

export default User;