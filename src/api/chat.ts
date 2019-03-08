import { getUser as User } from './user'
// chat submenu, main Menu in menu.js
export const Menu = [
  {
    text: 'Chat',
    icon: 'chat',
    to: { path: '/chat/messaging' }
  },
  {
    text: 'Contacts',
    icon: 'contacts',
    to: { path: '/chat/contact' }
  },
  {
    text: 'File',
    icon: 'insert_drive_file',
    to: { path: '/chat/media' }
  },
  {
    text: 'Settings',
    icon: 'settings',
    to: { path: '/chat/settings' }
  }
]
// chat group
export const Groups = [
  {
    id: 'a44f8ade-513c-46b5-bae4-0acf809860e6',
    title: 'nisi',
    created_by: '60d07662-bfec-42c7-b044-c81bc4ff8c7a',
    users: ['cjn8xmziv001o0770ie4hz5yl'],
    created_at: '2018-04-10T15:02:15.476Z'
  },
  {
    id: 'c86f170d-9a36-4f2c-bb76-2de65aa8c7bf',
    title: 'odio',
    users: ['cjn8xmziv001o0770ie4hz5yl'],
    created_by: 'eef93cb1-7766-4413-a5cf-ecbf71fa3674',
    created_at: '2018-04-11T04:02:56.728Z'
  }
]

const Messages = [
  {
    id: '2cc7e60b-a81b-4859-bb88-e894e11eb77d',
    chatId: 'a44f8ade-513c-46b5-bae4-0acf809860e6',
    text: 'Ex laudantium veniam aut repellendus voluptatem vitae suscipit at quisquam.',
    userId: 'cjn8xmziv001o0770ie4hz5yl',
    created_at: '2018-04-10T18:42:25.141Z'
  }
]

// Add user to map
Messages.map((item: any) => {
  let tmp: any[] | any = User().find(x => x.id === item.userId)
  item.user = {
    id: tmp.id,
    name: tmp.name,
    avatar: tmp.avatar
  }
  return item
})

// add messages to group
Groups.map((item: any) => {
  item.messages = Messages.filter(x => x.chatId === item.id)
  item.user = User().find(x => x.id === item.created_by)
  return item
})

// get chat group
export const getChatById = id => {
  return id !== undefined ? Groups.find(x => x.id === id) : Groups[0]
}

export default { Menu, Groups, getChatById }
