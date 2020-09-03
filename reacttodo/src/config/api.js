const BASE_URL = "http://localhost:8000/api/";// process.env.CMS_API_URL 


//const token = localStorage.getItem('user')
export const Api = {
    baseURL:BASE_URL+"todo_api/",
    bucketURL:BASE_URL+"bucket_api/"
}

export const header = {
    "Content-type":"application/json"
  }
