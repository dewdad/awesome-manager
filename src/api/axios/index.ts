import axios, { AxiosResponse } from 'axios'

const url = 'https://jsonplaceholder.typicode.com'

export async function getUsers(name: string) {
  let requestUrl = url + '/' + name
  let response = await axios.get(requestUrl)
  if (response) {
    console.log(response)
    return response
  }
}

export async function getUser(name: string, data: any = {}) {
  let requestUrl = url + '/' + name + '/' + data.id
  let response = await axios.get(requestUrl)
  if (response) {
    console.log(response)
    return response
  }
}

export async function createUser(name: string, data: any = {}) {
  let requestUrl = url + '/' + name
  let response = await axios.post(requestUrl, data)
  if (response) {
    console.log(response)
    return response
  }
}

export async function deleteUser(name: string, data: any = {}) {
  let requestUrl = url + '/' + name + '/' + data.id
  let response = await axios.delete(requestUrl, data)
  if (response) {
    console.log(response)
    return response
  }
}
