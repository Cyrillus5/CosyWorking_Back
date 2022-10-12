const { string } = require("joi");

    //~ ------------------------------ USER

    const userProperties = {
        id: { type: 'integer' },
        avatar: { type: 'string'},
        last_name: {type: 'string'},
        first_name: { type: 'string'},
        username: { type: 'string'},
        about: { type: 'string'},
        created_at: { type: 'timestamptz'},
        role: { type: 'string'},
        workspace_id: { type: 'integer'},
        workspace_title: { type: 'string'},
        image_link: { type: 'string'}
    };

const userExample = {
      get_user: {
        id: 50 ,
        avatar: '/images/avatar/img.png',
        last_name: 'Guy',
        first_name: 'Marc',
        username: 'Marc.G',
        about: 'Bonjour je suis un coworker',
        created_at: '2022-10-20 06:00:00',
        role: 'hôte',
        workspaces: [
          {
            workspace_id: 10,
            workspace_title: 'Bureau',
            image_link: '/images/workspace/img-05.png'
          }
        ]
      }
    };

module.exports = { userProperties, userExample };