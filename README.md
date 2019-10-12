# Reusabol
Circular food packaging service 

Questions:
[V] where to store the pendTrans array? In a state in the resto client? In redux, in pendTrans.
Normalizer library. 
Store in redux by id. 
dispatch an action in the socket. 

[V] How does it work in redux when we have more than one user or restaurant in terms of accessing their data?  


GIlat steps:
[V] make sure the use of the new endpoints is correct in the code 
[V] create a new cntrl that GET the pendTrans in the resto document
[ ] make sure websoket id is listening and auto update pendTrans state:
In the POST request controller, emit that there is a change.
[ ] refactor transaction to be pendTrans state and store the data there

Alternative: setInterval for the GET request. 
Leter -> move the websocket to a middleware 

Later: 
[ ] fetch with PUT request to pendTrans to update numBols in both user and resto. 
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