const getCitiesList = query =>
  fetch(`api/location/search/?query=${query}`).then(res => {
    if (res.status >= 200 && res.status < 300) {
      return res.json()
    } else {
      throw new Error()
    }
  })

export default getCitiesList
