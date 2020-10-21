const middlewares = jsonServer.default({
    static: './build',
});

const PORT = process.env.PORT;

server.use(middlewares);

server.listen(POST, () => {
    console.log('Server is running');
})