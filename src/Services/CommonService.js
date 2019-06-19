let commonService = {
  postData: function (data) {
    return new Promise((resolve, reject) => {
      if (data) {
        setTimeout(() => {
          resolve({
            id: Math.floor(Math.random() * 10),
            email: data.email
          })
        }, 5000)
      } else
        reject({
          status: 'Error',
          error: 'Login Failed'
        });
    })
  },

  compare: function (firstObj, secondObj) {
    const firstObjName = firstObj.name.toUpperCase();
    const secondObjName = secondObj.name.toUpperCase();
    
    let comparison = 0;
    if (firstObjName > secondObjName) {
      comparison = 1;
    } else if (firstObjName < secondObjName) {
      comparison = -1;
    }
    return comparison;
  }


}

export default commonService;