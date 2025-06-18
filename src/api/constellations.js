import axios from 'axios'

const API_BASE = 'http://polis.local/wp-json/polis/v1/constellation'

export function fetchConstellations() {
  return axios.get(`${API_BASE}/constellation`)
}

export function fetchConstellation(id) {
  return axios.get(`${API_BASE}/constellation/${id}`)
}
