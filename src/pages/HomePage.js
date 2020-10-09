import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1, 
        title:"Czym jest teoria strun?", 
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias assumenda optio temporibus, quia aspernatur, amet expedita ea dicta iste ipsum a sunt quasi, mollitia tenetur animi esse? Quaerat, voluptatibus architecto."
    },
    {
        id: 2, 
        title:"Czym jest paradoks fermiego?", 
        author: "Jan Kowalski",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias assumenda optio temporibus, quia aspernatur, amet expedita ea dicta iste ipsum a sunt quasi, mollitia tenetur animi esse? Quaerat, voluptatibus architecto."
    },
    {
        id: 3, 
        title:"Czym jest czarna dziura", 
        author: "Janusz Nowak",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias assumenda optio temporibus, quia aspernatur, amet expedita ea dicta iste ipsum a sunt quasi, mollitia tenetur animi esse? Quaerat, voluptatibus architecto."
    },
    {
        id: 4, 
        title:"Czym jest ciemna energia?", 
        author: "Grażyna Nowak",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias assumenda optio temporibus, quia aspernatur, amet expedita ea dicta iste ipsum a sunt quasi, mollitia tenetur animi esse? Quaerat, voluptatibus architecto."
    }
];

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id}  {...article} />
    ));


    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;