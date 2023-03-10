//模拟返回10条用户信息
export default [
  {
    url: "/api/login", //匹配到指定url
    method: "post",        //请求类型
    response: () => {
      return {
        code: 200,
        message: "ok",
        data: {
          login: true,
          token: "123456789",
        },
      };
    },
  },
];
