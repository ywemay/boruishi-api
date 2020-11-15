// db.delete_me.insert({ item: 'some item'})
db.createUser({
  user: 'boruishi',
  pwd: 'boruishipass',
  roles: [
    { role: 'readWrite', db: 'boruishi' }
  ]
})
