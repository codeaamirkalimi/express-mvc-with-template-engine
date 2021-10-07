function home(req, res){
    res.send(`
        <ul>
          <li><a href='/users'>Users</a></li>
          <li><a href='/users/:id'>User by id</a></li>
        </ul>`);
}

module.exports = home;