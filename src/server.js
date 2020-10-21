const jsonServer = request('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public.db.json')
const middlewares = jsonServer.default({
    static: './build',
});

const PORT = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);

server.listen(POST, () => {
    console.log('Server is running');
})