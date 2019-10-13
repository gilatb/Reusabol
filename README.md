# Reusabol
Circular food packaging service 

TODO: 
[ ] close the resto confirmation modal after clicking on confirm (like what's happening on cancel)

Later -> move the websocket to a middleware 

Later: 
[V] fetch with PUT request to pendTrans to update numBols in both user and resto. 
[ ] fetch with GET request to the user with a socket connection  


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