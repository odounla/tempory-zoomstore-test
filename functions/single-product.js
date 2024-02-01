exports.handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      let product = await Airtable.retrieve(i);
      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with id:${id}`,
        };
      }
      product = { id: product.id, ...product.filds };
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Server Error",
      };
    }
  }
};
