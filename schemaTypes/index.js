import serviceTime from './serviceTime'
import person from './person'
import newsPost from './newsPost'
import event from './event'
import roomHireRate from './roomHireRate'
import sitePage, {sectionTypes} from './sitePage'

export const schemaTypes = [
  serviceTime,
  person,
  newsPost,
  event,
  roomHireRate,
  sitePage,
  ...sectionTypes,
]
