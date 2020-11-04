import rest from '@/rest';

export default {
  getUser(payload) {
    return rest.get('/user/login?id=b&pwd=b').then(res => {
      console.log(res);
      console.log(payload);
      return "suee";
    })
  },
  insertUser(obj) {
    console.log(obj);
    return rest.post('/user/register', obj).then(res => {
      console.log("userService", res);
      return "suee";
    });
  }
}