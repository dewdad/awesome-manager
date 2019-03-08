import { ProcedureNode } from '@/api/prisma'

export const Projects: ProcedureNode[] = [
  {
    id: '1',
    name: 'Template PSD',
    startDate: '2018-10-10',
    deadline: '2018-10-15',
    progress: 90,
    color: 'pink'
  }
]

export const getProject = limit => {
  return limit ? Projects.slice(0, limit) : Projects
}

export default { Projects, getProject }
