/**
 * Return the profile image from an array of photos
 */
import _find from 'lodash/find'

export const profilePhoto = (photos) => {
  if (!photos) {
    return false
  }

  const photo = _find(photos, (pic) => { return pic.profile })
  return photo.imageUrl
}
