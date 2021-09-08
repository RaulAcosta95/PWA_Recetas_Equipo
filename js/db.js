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

