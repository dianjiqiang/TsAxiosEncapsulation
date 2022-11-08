import { getHomeMutatildata } from './service/index'

getHomeMutatildata()

import { aibiyingRequest } from './service/index'

aibiyingRequest
  .request({
    url: '/entire/list',
    params: {
      offset: 0,
      size: 20
    }
  })
  .then((res) => {
    console.log(res)
  })
