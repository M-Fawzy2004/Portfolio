let _lockCount = 0

export function lockNavigation() {
  _lockCount++
}

export function unlockNavigation() {
  if (_lockCount > 0) _lockCount--
}

export function isNavigationLocked() {
  return _lockCount > 0
}
