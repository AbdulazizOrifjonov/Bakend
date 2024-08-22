const {
    createRole,
    updateRole,
    deleteRole,
    getAllRoles
  } = require("./controllers/roleControllers");
  
  const resolvers = {
    Query: {
      getAllRoles: async () => {
        return await getAllRoles();
      }
    },
    Mutation: {
      createRole: async (_, { name }) => {
        const role = { body: { name } };
        return await createRole(role);
      },
      updateRole: async (_, { id, name }) => {
        const role = { params: { id }, body: { name } };
        return await updateRole(role);
      },
      deleteRole: async (_, { id }) => {
        const role = { params: { id } };
        await deleteRole(role);
        return true;
      }
    }
  };
  
  module.exports = resolvers;
  