const fetchdata = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('data fetched');
      }, 2000);
    });
  };
  
  fetchdata()
    .then((data) => {
      console.log(data);
      return fetchdata();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  