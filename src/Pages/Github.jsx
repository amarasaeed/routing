// method1(useparams)
// import React from 'react'
// import { useParams } from 'react-router-dom'


// export default function Github() {
//     const {username} = useParams()
//   return (
//     <div>this is {username} github</div>
//   )
// }

// method2

// import React from 'react'
// import { useState,useEffect } from 'react'

// export default function Github() {
//     const[data , setData]=useState(null)
//     useEffect(()=>{
// fetch('https://api.github.com/users/amarasaeed')
// .then(response=>response.json())
// .then(data1=>setData(data1))
//     },[])
//     if (!data) return <p>Loading...</p>;
//   return (

//     <div>
//       { data.bio}
//       { data.followers}

//     </div>
//   )
// }

// method3
import React from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github() {
    const data= useLoaderData()
  return (
    <div>
        {data.bio}
    </div>
  )
}

