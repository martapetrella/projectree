import project from './project'

const initialState = {
  project: {
    loading: true,
    name: "Projectree",
    links: [{
        name: 'Site',
        link: 'www.projectree.cloud',
        description: 'My site!'
    }],
    customer: {
      name: 'Myself SPA',
      contacts: [{
        name: 'Mario Rossi',
        email: 'mariorossi@myselfspa.com',
        phone: '55512345',
        role: 'Account',
        note: 'Lorem ipsum',
        alternative_contact: 'Luigi Bianchi', // name of another customer's contact if not avaiable
      }],
    },
    team: [{
      name: 'John Doe',
      email: 'johndoe@projectree.cloud',
      phone: '55523456',
      role: 'Developer',
      note: 'Nothing to say here',
      leader: 1, // boolean, required. Only one leader for each project
      supervisor: '', // if leader is False, must set the supervisor's name. Default: Team Leader.
    }],
    documentation: [{
      folder: {
        name: '',
        content: [{
          document: {
            name: '',
            content: '', // text saved in db, alternative to "link". Example: README file
            link: '', // link to the file, alternative to "content". Example: PDF of a presentation
          }
        }]
      }
    }],
    envoirments: [
        {
          name: 'develop',
          description: 'local env on your machine',
          accesses: [{
            name: 'Test ENV',
            link: 'dev.projectree.cloud',
            user: 'user',
            password: 'password',
            note: 'Lorem ipsum',
            reading_permissions: 'Team Only', // Who can read this info? Team Only / Team and Customer / List of specific names
          }]
        }
    ],
    business_goals: { // The true heart of the project! Divide the project in macro-business-goal! Example: Ecommerce Cart Flow / New Feature / User registration ...
      deadline: '20200615', // Can't be after the main deadline, of course...
      customer_contact: 'Mario Rossi', // Who controls this goal in customer's team?
      team_contact: 'John Doe', // Who controls this goal in your team?
      tasks: [ // Oh yeah, finally!
          {
            name: 'Make a coffee for your boss',
            description: 'Press the coffe button and that\'s all',
            priority: '1', // 1 to 5
            type: 'task', // task / bug / enhancment / test / meeting
            deadline: '20200615', // default: business goals deadline. REQUIRED for Meeting event
            estimate_effort: '2min',
            real_effort: '2min',
            recoursive: 'every day at 9:00 am', // only for test and meeting type
            work_on_it: 0, // 0: pause; 1: I work on it now --> so your boss will know that you are preparing his coffee right now
            owner: 'John Doe', // who will do this task?
            creator: 'John Doe', // who created this task?
            tester: 'John Doe', // who will test this task?
            invited: 'Mario Rossi', // only for Meeting type.
            meeting_notes: '', // only for Meeting type. To quickly write down the decisions made in the meeting
            dependences: 'Buy coffe', // Dependences of another task
            comments: [], // the conversation about the task
            status: 'todo', // todo / blocked / waiting for feedbacks / to test / released / won't fix
            commit_sha: '', // for git! :)
            resolution_notes: '', // Is it done? How you made it?
            attachments: [], // screenshots, etc...
            tags: [],
            test_env: [
              { // get the envoirments list and ckeck if the test is done
                name: 'develop',
                description: '', // if the dev needs to explain somethings to tester
                status: 'to test', // to test / passed / rejected
                note: '', // the tester explain what happens
                comments: [], // the conversation about the test
              }
            ]
          }
      ]
    },
    mood: 'Happy', // Say in a word if the project has problems. (Delay? The customer is unhappy? etc..)
    deadline: '20201231'
  },
}

export default function app(state = initialState, action) {
  return {
    project: project(state.project, action),
  }
}
