import isDev from './../utils/isDev'
import devAPI from './dev'
import prodAPI from './prod'

const API = isDev ? devAPI : prodAPI

export default API
