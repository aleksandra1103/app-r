import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Article from '../components/Article'

const articles = [
  {
    id: 1,
    title: 'Czym jest teoria strun',
    author: 'Jan Nowak',
    text: '1Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium assumenda deleniti aut esse quasi animi tempora laborum, praesentium amet, nobis omnis velit qui delectus sequi nulla soluta ratione. Consectetur, tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium assumenda deleniti aut esse quasi animi tempora laborum, praesentium amet, nobis omnis velit qui delectus sequi nulla soluta ratione.Consectetur, tenetur!'
  },
  {
    id: 2,
    title: 'Czym jest paradoks fermiego',
    author: 'Jan Kowalski',
    text: '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium assumenda deleniti aut esse quasi animi tempora laborum, praesentium amet, nobis omnis velit qui delectus sequi nulla soluta ratione. Consectetur, tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium assumenda deleniti aut esse quasi animi tempora laborum, praesentium amet, nobis omnis velit qui delectus sequi nulla soluta ratione.Consectetur, tenetur!'
  },
  {
    id: 3,
    title: 'Ciemna materia?',
    author: 'Jan Józef',
    text: '3Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium assumenda deleniti aut esse quasi animi tempora laborum, praesentium amet, nobis omnis velit qui delectus sequi nulla soluta ratione. Consectetur, tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium assumenda deleniti aut esse quasi animi tempora laborum, praesentium amet, nobis omnis velit qui delectus sequi nulla soluta ratione.Consectetur, tenetur!'
  },
]

const artList = articles.map(article => (
  <Article key={article.id} {...article} />
))

const HomePage = () => {
  return (
    <div className='home'>
      {artList}
    </div>
  );
}

export default HomePage;