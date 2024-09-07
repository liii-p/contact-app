const useRouter = jest.fn();

useRouter.mockImplementation(() => ({
  push: jest.fn(),
  route: "/",
  query: {},
}));

module.exports = {
  useRouter,
};
