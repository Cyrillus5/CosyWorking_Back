
    //~ ------------------------------ PROFIL

    const profilProperties = {
        id: {type: 'integer'},
        last_name: {type: 'string'},
        first_name: {type: 'string'},
        email: {type: 'string'},
        username: {type: 'string'},
        avatar: {type: 'string'},
        about: {type: 'string'},
        gender: {type: 'string'},
        role: {type: 'string'},
      };
  
    const profilExample = {
        id: 50,
        last_name: 'Guy',
        first_name: 'Marc',
        email: 'marc.g@gmail.com',
        username: 'Marc.G',
        avatar: '/images/avatar/img.png',
        about: 'Bonjour je suis un coworker',
        gender: 'male',
        role: 'coworker',
      };
  
      //~ ------------------------------ UPDATE PROFIL
  
    const updateProfilProperties = {
        id: {type: 'integer'},
        last_name: {type: 'string'},
        first_name: {type: 'string'},
        email: {type: 'string'},
        username: {type: 'string'},
        avatar: {type: 'string'},
        about: {type: 'string'},
        gender: {type: 'string'},
        role: {type: 'string'},
      };
  
    const updateProfilExample = {
        id: 50,
        last_name: 'Guy',
        first_name: 'Marc',
        email: 'marc.g@gmail.com',
        username: 'Marc',
        avatar: '/images/avatar/img-02.png',
        about: 'Bonjour je suis un hôte',
        gender: 'male',
        role: 'hôte',
      };
  
module.exports = { profilProperties, profilExample, updateProfilProperties, updateProfilExample };