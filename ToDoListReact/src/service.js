import axios from 'axios';
axios.defaults.baseURL = 'https://localhost:7290/items';
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    return Promise.reject("Error in api call: " + error);
  }
);
export default {
  getTasks: async () => {

    try {
      const result = await axios.get()
      return result.data;
    } catch (error) {
      console.log(error);
    }
  },

  addTask: async (name) => {

    console.log('addTask', name)
    try {
      const result = await axios.post('', { Name: name, IsComplete: false })
      return result.data;
    } catch (error) {
      console.log(error);
    }
  },

  setCompleted: async (id, name, isComplete) => {

    console.log('setCompleted', { id, isComplete })
    try {
      const result = await axios.put('', { Id: id, Name: name, IsComplete: isComplete })
      return result.data;
    } catch (error) {
      console.log(error);
    }
  },

  deleteTask: async (id) => {
    console.log('deleteTask')
    try {
      const result = await axios.delete(`/?id=${id}`)

    } catch (error) {
      console.log(error);
    }
  }
};
