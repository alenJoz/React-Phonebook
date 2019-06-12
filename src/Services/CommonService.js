let commonService = {
  postData: function (data) {
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        console.log(111);
        
        reject();
        // resolve({
        //   id: Math.random(),
        //   email: data.email
        // })
      }, 5000)
  })
}

}

export default commonService;