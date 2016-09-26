const Storage = {

  read(key) {
    console.log("inside read");
    const serializedData = localStorage[key];
    console.log("serializedData",serializedData);
    let localStorageGrades;
    try{
      localStorageGrades = JSON.parse(serializedData);
      console.log("schedules localStorage",localStorageGrades);
      return localStorageGrades;
    }
      catch(err){
        return null;
      }
  },

  write(key,data) {
    const serializedData =  JSON.stringify(data);
    localStorage[key] = serializedData;
  }
}

export default Storage;

