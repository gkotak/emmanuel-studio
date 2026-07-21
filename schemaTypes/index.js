import serviceTime from './serviceTime'
import person from './person'
import newsPost from './newsPost'
import event from './event'
import roomHireRate from './roomHireRate'
import sitePage, {sectionTypes} from './sitePage'
import siteImage from './siteImage'

export const schemaTypes = [
  serviceTime,
  person,
  newsPost,
  event,
  roomHireRate,
  sitePage,
  siteImage,
  ...sectionTypes,
]
