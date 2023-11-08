import { HttpResponse, http } from 'msw'

export const handlers = [
  http.get('/todos', ({request, params, cookies}) => {
    
    return HttpResponse.json({user: {id: 1, name: 'John Dow'}})
  })
]