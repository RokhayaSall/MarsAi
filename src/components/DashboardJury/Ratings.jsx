import { useState } from 'react';
import '/src/styles/variables.css';

export default function Ratings() {
    const [rating, setRating] = useState(0) // intialisation du compteur
    // const [saveNote, setSaveNote] = useState()

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        setIsLoading(true);
        setError(null);

        fetch(`${import.meta.env.VITE_API_URL}/ratings`, {
            method: "POST",
            body: JSON.stringify(rating),
            // mettre movie id 
            // mettre director id
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error("Erreur serveur JSON");
                return res.json();
            })
        
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }
    if (isLoading) return <h2 className="err-loading">Chargement de la page...</h2>; 
    if (error) return <h2 className="err-loading">Erreur : {error}</h2>; 
    
    
    
    //fetch les donnés du real et du film

  return (
      <section className='bg-[#F2F3F5] rounded-4xl p-8 py-30 flex flex-col m-10 '>
        <h2 className='font-bold text-4xl'>Nom du film</h2>
        <h3 className='font-semibold text-2xl text-[#2b71b1]'>Nom du real </h3>
        <ul className="stars flex text-3xl gap-1" >
            {[...Array(10)].map((_, index)=>{ //tableau de 10 étoiles
               return <li key={index}
               className={`${index+1<=rating ? 'text-[#2b71b1]' : ''}  cursor-pointer`}
               onClick={()=>{
                setRating(index+1); // ajoute +1 a chaque clique
               }}
               >&#9733;</li> 
            })}
        </ul>

        <p>Notes : {rating}/10</p>

        <button type='submit' onClick={handleSubmit} 
        className='bg-[#2b71b1] cursor-pointer w-50'>VALIDER MA NOTE</button> {/* faire en sorte qu'au clique la note s'enregistre dans la bdd */}
      </section>
  )
}
