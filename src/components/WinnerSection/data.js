export default [
    {
      id: '1tfjiELNrwYAJeafRYlT9RwOIiD',
      prize: '5,00,000'
    },
    {
      id: '1tfjiFoinFrbdLWlPI52dRLhNlD',
      prize: '2,00,000'
    },
    {
      id: '1tfjiDIAS8f2UYgV9ynCqWi7rZD',
      prize: '1,00,000'
    }
  ].map((winner, position) => ({ ...winner, position }))
  