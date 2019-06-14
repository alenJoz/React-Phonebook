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
  }

}

export default commonService;