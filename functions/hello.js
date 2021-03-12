// domain/.netlify/functions/hello

const items = [
  { id: 1, name: 'adi' },
  { id: 2, name: 'tal' },
];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
