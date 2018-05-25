const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  id: Number,
  url: String,
  forkCount: Number,
  ownerName: String,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  for (var i = 0; i<repos.length; i++) {
    var curRepo = repos[i];
    var newRepo = new Repo({
      name: curRepo.name,
      id: curRepo.id,
      url: curRepo.url,
      ownerName: curRepo.owner.login
    });
    newRepo.save().then(()=>console.log('repo saved'));
  }

}

module.exports.save = save;