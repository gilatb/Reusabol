# Reusabol
Circular food packaging service 

TODO: 
[V] close the resto confirmation modal after clicking on confirm (like what's happening on cancel)
[ ] make reqBody dynamic in RestoComfirmModal


Later: 
[V] fetch with PUT request to pendTrans to update numBols in both user and resto. 
[ ] fix -> PUT request doesn't work (only frontend, works with postman) -> probably becasue we have to use 
    pendingTransaction redux state 
[ ] finish the cycle of the order:
    [ ] **GET** request to the user with a socket connection, of the pendingTrans array that was updated 
    [ ] **DELETE** the pending transaction from user and resto 
    [ ] **POST** request to the user and resto prevtransactions
    [ ] toggle UI modal
[ ] make all way dynamic with flag of the type (*Take*/*Return*)
[ ] handle cancel request in both ends (user and resto)
[ ] move the websocket to a middleware


Hard coded restos db:
  const restos = [
    {
      id: 1,
      name: 'Banana place',
      address: "Carrer d'Àvila, 27, 08005 Barcelona",
      coordinates: { lat: 41.394205, lng: 2.15400725345 }
    },
    {
      id: 2,
      name: 'Ice-cream place',
      address: "Carrer d'Banana, 27, 08005 Barcelona",
      coordinates: { lat: 41.378205, lng: 2.156007231 }
    },
    {
      id: 3,
      name: 'Menssana',
      address: "Carrer d'Àvila, 27, 08005 Barcelona",
      coordinates: { lat: 41.390765, lng: 2.121554007 }
    }
  ];