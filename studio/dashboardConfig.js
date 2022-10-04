export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '633c460e20b466289112aed5',
                  title: 'Sanity Studio',
                  name: 'tm-studio',
                  apiId: 'c36ed0a4-7ea5-45e6-8126-ebc5d0e27726'
                },
                {
                  buildHookId: '633c460f5812ae254e43074b',
                  title: 'Blog Website',
                  name: 'tm-web',
                  apiId: '782b5086-a4e0-4ad5-837e-c0840ddc51ea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sportyfred/tm',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://tm-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
