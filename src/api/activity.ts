import { ActivityNode } from './prisma'

const Items: ActivityNode[] = [
  {
    id: '1',
    occurrenceDate: '2018-1-1',
    content: 'meeting',
    startTime: '9:00am',
    endTime: '11:00am',
    currentDate: '2018-10-28',
    reportDate: '2018-10-29',
    reportContent: 'content',
    instructionDate: '2019-10-30',
    instruction: 'Good',
    priority: 'HIGH'
  }
]

const getActivity = limit => {
  return limit ? Items.slice(0, limit) : Items
}

export default {
  getActivity
}
