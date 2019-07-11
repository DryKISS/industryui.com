/**
 * Return the profile image from an array of photos
 */
import find from 'lodash/find'

export const profilePhoto = (photos) => {
  if (!photos) {
    return false
  }

  const photo = find(photos, (pic) => { return pic.profile })
  return photo.imageUrl
}
