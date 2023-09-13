import { type Doc, type SpaceXApiResponse } from '../types/api'

// const BASE_URL = 'https://api.spacexdata.com/v5'
const BASE_URL = import.meta.env.PUBLIC_BASE_URL

export const getLaunchBy = async ({ id }: { id: string }) => {
  const res = await fetch(`${BASE_URL}/launches/${id}`)

  const { data: launch } = (await res.json()) as Launch
  return launch
}

export const getLatestLaunches = async () => {
  const res = await fetch(`${BASE_URL}/launches`, {
    method: 'GET'
  })

  const { data: launches } = (await res.json()) as SpaceXApiResponse
  return launches
}
