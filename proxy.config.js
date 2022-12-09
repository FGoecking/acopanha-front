const proxy = [
    {
      context: '/api',
      target: 'https://acompanha-restapi.rj.r.appspot.com',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;