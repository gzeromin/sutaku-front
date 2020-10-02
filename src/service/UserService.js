import rest from '@/rest';

export default {
  getUser(payload) {
    return rest.post('/user/signUp',{"aaa":"bbb","ccc":"ddd"}).then(res => {
      console.log(res);
      console.log(payload);
      return "suee";
    })
  },
  insertUser(obj) {
    console.log(obj);
  }
}