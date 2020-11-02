import React from 'react';
import SingleLineGridList from './SingleLineGridList';

const myHouse = [
  {
    'id': 1,
    'title': 'Felipe Menezes',
    'subtitle': 'Top skill: Software Engineering 4',
    'img': 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  }, 
  {
    'id': 2,
    'title': 'Tiago Peixoto',
    'subtitle': 'Top skill: Product Management 4',
    'img': 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' 
  },
  {
    'id': 3,
    'title': 'Garrett Smiley',
    'subtitle': 'Top skill: Product Management 4',
    'img': 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' 
  },
  {
    'id': 4,
    'title': 'Lorem Ipsum',
    'subtitle': 'Top skill: Product Management 4',
    'img': 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' 
  },
  {
    'id': 5,
    'title': 'Lero Lero',
    'subtitle': 'Top skill: Product Management 4',
    'img': 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' 
  },
  ];

export default function MyHouse() {

  return (
      <SingleLineGridList data={myHouse}/>
  );
}
