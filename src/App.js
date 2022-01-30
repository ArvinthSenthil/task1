import "./App.css";
import { useState } from "react";

export default function App() {
const user=[
  {
    profile:"https://www.pinkvilla.com/imageresize/jai_bhim_twiiter_review_1.jpg?width=752&format=webp&t=pvorg",
    name:"Jai Bhim(2021)",
    rating:"9.3",
    description:"When a tribal man is arrested for a case of alleged theft, his wife turns to a lawer to help bring justice",
    director:"T J Gnanavel",
    stars:"Suriya,Lijo Mol Jose,Manikandan,Rajsha vijayan"
  },
  {
    profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlUkQ340Bx1uqA13162eU9DV_E3gl2sLLUs9N-dnic1G41sQuwU6YAcT5Qdd1TAOsZTLQ&usqp=CAU",
    name:"The Shawshank Redemption(1994)",
    rating:"9.3",
    description:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency",
    director:"Frank Darabont",
    stars:"Tim Robbins,Morgan Freeman,Bob Gunton,William sadler"

    
  },
  {
    profile:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    name:"The Godfather(1972)",
    rating:"9.2",
    description:"The aging patriarch of an organized crime dynasty in postwar Newyork city transfers control of his clandestine empire to his reluctant youngest son.",
    director:"Fransis Ford Coppola",
    stars:"Marlon Bardo,AI Pacino,James Caan,Diane Keaton"
  },
  {
    profile:"https://qph.fs.quoracdn.net/main-qimg-9e897497b05d7d1dd49bca31587ad034-pjlq",
    name:"The Dark Knight(2008)",
    rating:"9.0",
    description:"When the menace known as the joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of his ability to fight injustice.",
    director:"Christopher Nolan",
    stars:"Christian Bale,Heath Ledger,Aaron Echart,Michael Caine"
  },
  {
    profile:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    name:"The Godfather part 2(1974)",
    rating:"9.0",
    description:"The early life of Vito coreleone in 1920s newyork city is portrayed,While his son,Michael expands his grip on the family.",
    director:"Francis Ford Coppola",
    stars:"AL Pacino,Robert De Niro,Robert Duvall,Diane Keaton"
  },
]
  return (
    <div className="App">
      <div className="heading"><h2 class="title">IMDB</h2></div>
      {user.map((nm) => (
        <Msg name={nm.name} profile={nm.profile} rating={nm.rating} description={nm.description} director={nm.director} stars={nm.stars} />
      ))}
    </div>
  );
}

function Msg({ name,profile,rating,description,director,stars }) {
  return (
    <div >
    <div class="card mb-3 mx-auto my-3">
         <div class="row no-gutters">
             <div class="col-md-4">
                 <img src={profile} class="img img-thumbnail " alt="img" />
             </div>
             <div class="col-md-8">
                 <div class="card-body">
                 <h1 class="card-title text-center  ">{name}</h1>
                     <p class="card-text"><span class="h5"> Rating : </span> <span class="pfont"> ⭐{rating}</span> </p>
                   
                     <p class="card-text"><span class="h5"> Description: </span> <span class="pfont"> {description}</span> </p>
                     <p class="card-text"><span class="h5">  Director: </span> <span class="pfont"> {director}</span> </p>
                   
                     <p class="card-text"><span class="h5"> Stars: </span> <span class="pfont"> {stars}</span> </p>
                     <Counter />
                 </div>
             </div>
         </div>
     </div>
    
</div>
  );
}

function Counter() {
  const [like, setLike]= useState(0);
  const [unLike,setunLike]=useState(0);
  return(
   
  <div>
    <button onClick={()=> setLike(like+1)}>👍{like}</button>
    <button onClick={()=> setunLike(unLike+1)}>👎{unLike}</button>
   
  </div>
 
  );
}