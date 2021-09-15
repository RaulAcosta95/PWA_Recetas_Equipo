
//offline data

db.enablePersistence()
.catch(err=>{
    if (err.code=='failed-precondition') {
        //probablemente hay varias pestañas abiertas
        console.log('persistence failed');
        
    }else if (err.code=='unimplemented') {
        console.log('persistence is not available');
    }
});

// add new recipe
//Cuando ocurre un cambio en la BD
console.log('/js/db.js');
db.collection('recipes').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach(change =>{
        console.log(change, change.doc.data());
    })
})

// const form = document.querySelector('form');
// form.addEventListener('submit', evt => {
//   evt.preventDefault();
  
//   const recipe = {
//     name: form.title.value,
//     ingredients: form.ingredients.value
//   };

//   db.collection('recipes').add(recipe)
//     .catch(err => console.log(err));

//   form.title.value = '';
//   form.ingredients.value = '';
// });

